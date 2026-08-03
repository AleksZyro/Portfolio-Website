import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const user = process.env.GITHUB_USER || 'AleksZyro';
const token = process.env.GITHUB_TOKEN;
const output = process.env.OUTPUT_PATH || 'assets/contribution-graphic.svg';

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
      'user-agent': `${user}-portfolio-contribution-graphic`
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
    headers: { 'user-agent': `${user}-portfolio-contribution-graphic` }
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

const escapeHtml = (value) => String(value)
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;');

const calendar = token ? await fetchGraphqlCalendar() : await fetchPublicCalendar();
const weeks = calendar.weeks.slice(-53);
const days = weeks.flatMap((week) => week.contributionDays);
const maxCount = Math.max(1, ...days.map((day) => day.contributionCount));
const total = calendar.totalContributions;

const width = 892;
const height = 204;
const cell = 15;
const gap = 1;
const gridX = 22;
const gridY = 62;
const progressX = 244;
const progressWidth = 626;
const progressFill = Math.min(progressWidth, Math.round((total / Math.max(total, 1000)) * progressWidth));

const colorFor = (count) => {
  if (count === 0) return '#1a2743';
  const ratio = count / maxCount;
  if (ratio > 0.7) return '#98c7ff';
  if (ratio > 0.38) return '#5e95f5';
  if (ratio > 0.16) return '#3f6fb9';
  return '#263b62';
};

const cells = weeks.map((week, weekIndex) => week.contributionDays.map((day, rowIndex) => {
  const x = gridX + weekIndex * (cell + gap);
  const y = gridY + rowIndex * (cell + gap);
  const label = `${day.date}: ${day.contributionCount} contributions`;
  return `  <rect class="grid-cell" x="${x}" y="${y}" width="${cell}" height="${cell}" fill="${colorFor(day.contributionCount)}"><title>${escapeHtml(label)}</title></rect>`;
}).join('\n')).join('\n');

const markers = [0, 0.28, 0.56, 0.84, 1].map((ratio, index) => {
  const x = progressX + ratio * progressWidth;
  const colors = ['#ff5d6c', '#ffb86b', '#67d9ff', '#8d6cff', '#93c5fd'];
  return `  <g class="hud-marker" transform="translate(${x.toFixed(1)} 30)">
    <circle r="8.5" fill="${colors[index]}" opacity="0.95" />
    <circle cx="-2.8" cy="-1.8" r="1.5" fill="#f5fbff" />
    <circle cx="2.8" cy="-1.8" r="1.5" fill="#f5fbff" />
    <circle cx="-2.2" cy="-1.7" r="0.55" fill="#132744" />
    <circle cx="3.4" cy="-1.7" r="0.55" fill="#132744" />
  </g>`;
}).join('\n');

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="274" viewBox="0 0 ${width} ${height}" fill="none" role="img" aria-label="${escapeHtml(user)} contribution activity">
  <defs>
    <linearGradient id="shell" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#07111f" />
      <stop offset="100%" stop-color="#0d1930" />
    </linearGradient>
    <style>
      .t-sub { font: 700 13px 'Segoe UI', 'Trebuchet MS', sans-serif; fill: #a8c4ec; }
      .t-small { font: 700 11px 'Consolas', 'Courier New', monospace; fill: #8fb3df; }
      .grid-cell { rx: 2; ry: 2; shape-rendering: geometricPrecision; }
      .progress-track { fill: #122340; }
      .progress-fill { fill: #ffd54a; }
      .hud-marker { opacity: 0.86; }
    </style>
  </defs>

  <rect width="${width}" height="${height}" fill="url(#shell)" rx="18" />
  <rect x="22" y="18" width="204" height="22" rx="9" fill="#102036" stroke="#29466f" stroke-opacity="0.65" />
  <text x="36" y="33" class="t-sub">Commit amount</text>
  <text x="190" y="33" class="t-sub">/${total}</text>
  <rect x="${progressX}" y="27" width="${progressWidth}" height="6" rx="3" class="progress-track" />
  <rect x="${progressX}" y="27" width="${progressFill}" height="6" rx="3" class="progress-fill" />
${markers}
${cells}
  <text x="${width - 22}" y="${height - 18}" class="t-small" text-anchor="end">updated daily via GitHub Actions</text>
</svg>
`;

await mkdir(path.dirname(output), { recursive: true });
await writeFile(output, svg, 'utf8');
