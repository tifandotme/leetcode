/*
 * @lc app=leetcode id=242 lang=typescript
 *
 * [242] Valid Anagram
 */

// @lc code=start
function isAnagram(s: string, t: string): boolean {
  if (s.length !== s.length) return false

  return sortAscending(s) === sortAscending(t)
}

function sortAscending(str: string): string {
  return str.split("").sort().join("")
}
// @lc code=end
