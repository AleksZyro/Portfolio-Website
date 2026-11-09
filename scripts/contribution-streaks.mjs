const dayMs = 24 * 60 * 60 * 1000;
const utcDay = (date) => Date.parse(`${date}T00:00:00Z`);

export function calculateContributionStreaks(days, today) {
  const todayMs = utcDay(today);
  const activeDays = days
    .filter(({ date, contributionCount }) => date <= today && contributionCount > 0)
    .map(({ date }) => utcDay(date))
    .sort((a, b) => a - b);

  let lastDay = -Infinity;
  let run = 0;
  let longestPast = 0;
  for (const day of activeDays) {
    if (day !== lastDay + dayMs) {
      longestPast = Math.max(longestPast, run);
      run = 0;
    }
    run++;
    lastDay = day;
  }

  return lastDay >= todayMs - dayMs
    ? { current: run, longestPast }
    : { current: 0, longestPast: Math.max(longestPast, run) };
}
