/*
 * @lc app=leetcode id=1663 lang=typescript
 *
 * [1663] Smallest String With A Given Numeric Value
 */

// @lc code=start
function getSmallestString(n: number, k: number): string {
  // n = string length
  // k = numeric value (sum of all characters)
  // ? find lexicographically smallest string with length n and numeric value of k

  let result = ""
  let sum = 0

  for (let i = n - 1; i >= 0; i--) {
    const numVal = Math.min((k - i) - sum, 26)

    // char "a" starts at 97
    result = String.fromCharCode(numVal + 96) + result
    sum += numVal
  }

  return result
}
// @lc code=end
