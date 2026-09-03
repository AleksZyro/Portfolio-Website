import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const user = process.env.GITHUB_USER || 'AleksZyro';
const output = process.env.OUTPUT_PATH || 'assets/contribution-graphic.svg';
const indexPath = process.env.INDEX_PATH || 'index.html';

const escapeHtml = (value) => String(value)
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;');

const contributionCountFromTooltip = (tooltip) => {
  if (/No contributions/i.test(tooltip)) return 0;
  const match = tooltip.match(/([\d,.' ]+)\s+contributions?/i);
  return match ? Number(match[1].replace(/[^\d]/g, '')) : 0;
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
  const dayMatches = [...html.matchAll(/data-date="([^"]+)"[^>]*data-level="([^"]+)"[\s\S]*?<\/td>\s*<tool-tip[^>]*>([\s\S]*?)<\/tool-tip>/g)];
  const contributionDays = dayMatches.map((match) => ({
    date: match[1],
    contributionCount: contributionCountFromTooltip(match[3]),
    level: Number(match[2])
  })).sort((a, b) => a.date.localeCompare(b.date));

  if (!contributionDays.length) {
    throw new Error(`No public contribution days found for ${user}.`);
  }

  const firstDate = new Date(`${contributionDays[0].date}T00:00:00Z`);
  const weeks = [];
  for (const day of contributionDays) {
    const date = new Date(`${day.date}T00:00:00Z`);
    const weekIndex = Math.floor((date - firstDate) / (7 * 24 * 60 * 60 * 1000));
    if (!weeks[weekIndex]) weeks[weekIndex] = { contributionDays: [] };
    weeks[weekIndex].contributionDays[date.getUTCDay()] = day;
  }

  return {
    totalContributions,
    weeks: weeks.map((week) => ({
      contributionDays: Array.from({ length: 7 }, (_, index) => week.contributionDays[index]).filter(Boolean)
    }))
  };
};

// Use the same public contribution calendar a visitor sees on the GitHub profile.
const calendar = await fetchPublicCalendar();
const weeks = calendar.weeks.slice(-53);
const days = weeks.flatMap((week) => week.contributionDays);
const maxCount = Math.max(1, ...days.map((day) => day.contributionCount));

const contributionByDate = new Map(days.map((day) => [day.date, day.contributionCount]));
const isoDate = (date) => date.toISOString().slice(0, 10);
const localDateFormatter = new Intl.DateTimeFormat('en-CA', {
  timeZone: 'Europe/Zurich',
  year: 'numeric',
  month: '2-digit',
  day: '2-digit'
});
const swissDate = (date) => localDateFormatter.format(date);
const shiftDate = (date, amount) => {
  const shifted = new Date(date);
  shifted.setUTCDate(shifted.getUTCDate() + amount);
  return shifted;
};

const today = swissDate(new Date());
const yesterdayDate = shiftDate(new Date(`${today}T00:00:00Z`), -1);
let streakCursor = yesterdayDate;
let completedStreak = 0;
while ((contributionByDate.get(isoDate(streakCursor)) || 0) > 0) {
  completedStreak += 1;
  streakCursor = shiftDate(streakCursor, -1);
}

// The daily run happens early in the morning. If yesterday was active, show
// the expected value for today so a continuous streak stays current all day.
const currentDayActive = (contributionByDate.get(today) || 0) > 0;
const currentStreak = completedStreak > 0 ? completedStreak + 1 : (currentDayActive ? 1 : 0);

const width = 960;
const height = 224;
const cell = 11;
const gap = 4;
const panelX = 22;
const panelY = 50;
const panelWidth = 916;
const panelHeight = 150;
const gridX = 92;
const gridY = 82;
const monthY = 75;
const weekdayLabels = [
  { label: 'Mon', row: 1 },
  { label: 'Wed', row: 3 },
  { label: 'Fri', row: 5 }
];
const monthLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const levelFor = (count) => {
  if (count <= 0) return 0;
  const ratio = count / maxCount;
  if (ratio > 0.7) return 4;
  if (ratio > 0.38) return 3;
  if (ratio > 0.16) return 2;
  return 1;
};

const colorFor = (count) => ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'][levelFor(count)];

const cells = weeks.map((week, weekIndex) => week.contributionDays.map((day) => {
  const date = new Date(`${day.date}T00:00:00Z`);
  const x = gridX + weekIndex * (cell + gap);
  const y = gridY + date.getUTCDay() * (cell + gap);
  const label = `${day.date}: ${day.contributionCount} contributions`;
  return `  <rect class="day-cell" x="${x}" y="${y}" width="${cell}" height="${cell}" rx="2" fill="${colorFor(day.contributionCount)}"><title>${escapeHtml(label)}</title></rect>`;
}).join('\n')).join('\n');

const months = weeks.map((week, weekIndex) => {
  const firstDay = week.contributionDays[0];
  if (!firstDay) return '';
  const date = new Date(`${firstDay.date}T00:00:00Z`);
  const previousWeek = weeks[weekIndex - 1]?.contributionDays[0];
  const previousDate = previousWeek ? new Date(`${previousWeek.date}T00:00:00Z`) : null;
  if (previousDate && previousDate.getUTCMonth() === date.getUTCMonth()) return '';
  const x = gridX + weekIndex * (cell + gap);
  return `  <text x="${x}" y="${monthY}" class="month-label">${monthLabels[date.getUTCMonth()]}</text>`;
}).filter(Boolean).join('\n');

const weekdays = weekdayLabels.map((item) => {
  const y = gridY + item.row * (cell + gap) + cell - 1;
  return `  <text x="${gridX - 18}" y="${y}" class="weekday-label" text-anchor="end">${item.label}</text>`;
}).join('\n');

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="280" viewBox="0 0 ${width} ${height}" fill="none" role="img" aria-label="${escapeHtml(user)} GitHub contribution calendar">
  <style>
    .title { font: 500 17px -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; fill: #f0f6fc; }
    .month-label, .weekday-label, .legend, .hint { font: 400 12px -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; fill: #f0f6fc; }
    .hint, .legend-muted { fill: #8b949e; }
    .day-cell { shape-rendering: geometricPrecision; }
  </style>

  <rect width="${width}" height="${height}" rx="14" fill="#0d1117" />
  <text x="${panelX}" y="34" class="title">${calendar.totalContributions} contributions in the last year</text>
  <rect x="${panelX}" y="${panelY}" width="${panelWidth}" height="${panelHeight}" rx="6" fill="none" stroke="#30363d" />
${months}
${weekdays}
${cells}
</svg>
`;

await mkdir(path.dirname(output), { recursive: true });
await writeFile(output, svg, 'utf8');
const indexHtml = await readFile(indexPath, 'utf8');
const streakPattern = /(<strong id="github-streak-value">)\d+(<\/strong>)/;
const contributionImagePattern = /(<img src="assets\/contribution-graphic\.svg)(?:\?v=[^"]*)?("[^>]*>)/;
const updatedIndexHtml = indexHtml
  .replace(
  streakPattern,
  `$1${currentStreak}$2`
  )
  .replace(
    contributionImagePattern,
    `$1?v=${today}$2`
  );
if (!streakPattern.test(indexHtml)) {
  throw new Error(`Could not update GitHub streak in ${indexPath}.`);
}
if (!contributionImagePattern.test(indexHtml)) {
  throw new Error(`Could not update contribution image cache key in ${indexPath}.`);
}
await writeFile(indexPath, updatedIndexHtml, 'utf8');
console.log(`Updated GitHub streak to ${currentStreak} days.`);
