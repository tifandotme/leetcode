/*
 * @lc app=leetcode id=125 lang=typescript
 *
 * [125] Valid Palindrome
 */

// @lc code=start
function isPalindrome(s: string): boolean {
  s = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()

  let left = 0, right = s.length - 1

  while (left < right) {
    if (s[left] !== s[right]) {
      return false
    }
    left++
    right--
  }

  return true
}
// @lc code=end
