/*
 * @lc app=leetcode id=49 lang=typescript
 *
 * [49] Group Anagrams
 */

// @lc code=start
function groupAnagrams(strs: string[]): string[][] {
  const result = new Map<string, string[]>()

  for (const str of strs) {
    const sorted = str.split("").sort().join("")

    if (result.has(sorted)) {
      result.get(sorted)!.push(str)
    } else {
      result.set(sorted, [str])
    }
  }

  return Array.from(result.values())
}
// @lc code=end
