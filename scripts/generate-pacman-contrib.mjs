import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const user = process.env.GITHUB_USER || 'AleksZyro';
const token = process.env.GITHUB_TOKEN;
const output = process.env.OUTPUT_PATH || 'assets/pacman-contrib.svg';

const query = `
  query($login: String!) {
    user(login: $login) {
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              contributionCount
              date
            }
          }
        }
      }
    }
  }
`;

const fetchGraphqlCalendar = async () => {
  const response = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      authorization: `Bearer ${token}`,
      'content-type': 'application/json',
      'user-agent': `${user}-portfolio-contribution-svg`
    },
    body: JSON.stringify({ query, variables: { login: user } })
  });

  if (!response.ok) {
    throw new Error(`GitHub GraphQL request failed: ${response.status} ${response.statusText}`);
  }

  const payload = await response.json();
  if (payload.errors?.length) {
    throw new Error(payload.errors.map((error) => error.message).join('; '));
  }

  const calendar = payload.data?.user?.contributionsCollection?.contributionCalendar;
  if (!calendar) {
    throw new Error(`No contribution calendar found for ${user}.`);
  }

  return calendar;
};

const fetchPublicCalendar = async () => {
  const response = await fetch(`https://github.com/users/${user}/contributions`, {
    headers: { 'user-agent': `${user}-portfolio-contribution-svg` }
  });

  if (!response.ok) {
    throw new Error(`GitHub public contribution request failed: ${response.status} ${response.statusText}`);
  }

  const html = await response.text();
  const totalMatch = html.match(/<h2[^>]*>\s*([\d,.' ]+)\s*contributions?/i);
  const totalContributions = totalMatch ? Number(totalMatch[1].replace(/[^\d]/g, '')) : 0;
  const dayMatches = [...html.matchAll(/data-date="([^"]+)"[^>]*data-level="([^"]+)"/g)];
  const contributionDays = dayMatches.map((match) => ({
    date: match[1],
    contributionCount: Number(match[2])
  }));

  if (!contributionDays.length) {
    throw new Error(`No public contribution days found for ${user}.`);
  }

  const weeks = [];
  for (let index = 0; index < contributionDays.length; index += 7) {
    weeks.push({ contributionDays: contributionDays.slice(index, index + 7) });
  }

  return { totalContributions, weeks };
};

const calendar = token ? await fetchGraphqlCalendar() : await fetchPublicCalendar();

const weeks = calendar.weeks;
const days = weeks.flatMap((week) => week.contributionDays);
const maxCount = Math.max(1, ...days.map((day) => day.contributionCount));
const cell = 11;
const gap = 4;
const gridX = 236;
const gridY = 68;
const height = 224;
const gridWidth = weeks.length * (cell + gap) - gap;
const gridHeight = 7 * (cell + gap) - gap;
const width = gridX + gridWidth + 48;
const activeDays = days.filter((day) => day.contributionCount > 0);
const pacmanDay = activeDays.at(-1) || days.at(-1);
const pacmanIndex = days.findIndex((day) => day.date === pacmanDay.date);
const pacmanWeek = Math.max(0, Math.floor(pacmanIndex / 7));
const pacmanRow = Math.max(0, pacmanIndex % 7);
const pacmanX = gridX + pacmanWeek * (cell + gap) + cell / 2;
const pacmanY = gridY + pacmanRow * (cell + gap) + cell / 2;

const escapeHtml = (value) => String(value)
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;');

const colorFor = (count) => {
  if (count === 0) return '#192238';
  const ratio = count / maxCount;
  if (ratio > 0.7) return '#93c5fd';
  if (ratio > 0.38) return '#60a5fa';
  if (ratio > 0.16) return '#3b82f6';
  return '#243b65';
};

const cells = weeks.map((week, weekIndex) => week.contributionDays.map((day, rowIndex) => {
  const x = gridX + weekIndex * (cell + gap);
  const y = gridY + rowIndex * (cell + gap);
  const label = `${day.date}: ${day.contributionCount} contributions`;
  return `<rect class="grid-cell" x="${x}" y="${y}" width="${cell}" height="${cell}" rx="2.5" fill="${colorFor(day.contributionCount)}"><title>${escapeHtml(label)}</title></rect>`;
}).join('\n')).join('\n');

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="292" viewBox="0 0 ${width} ${height}" fill="none" role="img" aria-label="${escapeHtml(user)} Pac-Man Contribution Run">
  <defs>
    <linearGradient id="shell" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#07111f" />
      <stop offset="100%" stop-color="#0d1930" />
    </linearGradient>
    <style>
      .label { font: 700 14px 'Segoe UI', 'Trebuchet MS', sans-serif; fill: #a8c4ec; }
      .title { font: 800 18px 'Segoe UI', 'Trebuchet MS', sans-serif; fill: #dce9ff; }
      .mono { font: 700 12px 'Consolas', 'Courier New', monospace; fill: #8fb3df; }
      .grid-cell { shape-rendering: geometricPrecision; }
    </style>
  </defs>

  <rect width="${width}" height="${height}" rx="20" fill="url(#shell)" />
  <rect x="20" y="20" width="${width - 40}" height="${height - 40}" rx="16" fill="#081326" stroke="#27456e" stroke-opacity="0.72" />
  <text x="42" y="50" class="title">${escapeHtml(user)} Contribution Run</text>
  <text x="42" y="72" class="label">Total contributions last year: ${calendar.totalContributions}</text>

  <g transform="translate(40 100)">
    <circle cx="54" cy="54" r="48" fill="#ffd54a" />
    <path d="M54 54 L101 32 A48 48 0 0 1 101 76 Z" fill="#081326" />
    <circle cx="60" cy="25" r="5" fill="#081326" />
    <text x="54" y="122" class="mono" text-anchor="middle">live GitHub data</text>
  </g>

  <rect x="${gridX - 16}" y="${gridY - 16}" width="${gridWidth + 32}" height="${gridHeight + 32}" rx="14" fill="#101f38" stroke="#29466f" stroke-opacity="0.65" />
  <g>
${cells}
  </g>

  <g transform="translate(${pacmanX} ${pacmanY})">
    <circle r="8.5" fill="#ffd54a" />
    <path d="M0 0 L8 -4 A9 9 0 0 1 8 4 Z" fill="#10203a" />
  </g>

  <text x="${width - 36}" y="${height - 28}" class="mono" text-anchor="end">updated daily via GitHub Actions</text>
</svg>
`;

await mkdir(path.dirname(output), { recursive: true });
await writeFile(output, svg, 'utf8');
