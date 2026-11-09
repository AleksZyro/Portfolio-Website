import assert from 'node:assert/strict';
import test from 'node:test';
import { calculateContributionStreaks } from '../scripts/contribution-streaks.mjs';

const days = [
  ['2026-10-30', 1], ['2026-10-31', 3], ['2026-11-01', 1],
  ['2026-11-02', 0],
  ['2026-11-05', 2], ['2026-11-06', 1], ['2026-11-07', 3], ['2026-11-08', 1],
].map(([date, contributionCount]) => ({ date, contributionCount }));

test('separates the longest completed streak from the current run', () => {
  assert.deepEqual(calculateContributionStreaks(days, '2026-11-09'), {
    current: 4,
    longestPast: 3,
  });
  assert.deepEqual(calculateContributionStreaks(days, '2026-11-10'), {
    current: 0,
    longestPast: 4,
  });
});

test('counts today when it has a contribution and excludes future days', () => {
  assert.deepEqual(calculateContributionStreaks(days, '2026-11-07'), {
    current: 3,
    longestPast: 3,
  });
  assert.deepEqual(calculateContributionStreaks([], '2026-11-07'), {
    current: 0,
    longestPast: 0,
  });
});
