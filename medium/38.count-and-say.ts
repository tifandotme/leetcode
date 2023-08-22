/*
 * @lc app=leetcode id=38 lang=typescript
 *
 * [38] Count and Say
 */

// @lc code=start
function countAndSay(n: number): string {
  if (n === 1) return "1"

  const previous = countAndSay(n - 1)
  let result = ""
  let count = 1

  for (let i = 0; i < previous.length; i++) {
    if (previous[i] === previous[i + 1]) {
      count++
    } else {
      result += String(count) + previous[i]
      count = 1
    }
  }

  return result
}
// @lc code=end
