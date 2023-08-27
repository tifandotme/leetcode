/*
 * @lc app=leetcode id=238 lang=typescript
 *
 * [238] Product of Array Except Self
 * 
 * Topics: array, prefix/postfix sum
 * 
 * 1. Loop through nums from left to right, then assign result[i] = product of previous numbers
 * 2. Loop through nums from right to left, then assign result[i] *= product of next numbers
 * 3. First element and last element will be 0, so we need to assign product = 1
 * 
 * Time: O(n)
 * Space: O(1)
 * 
 * Reference: Neetcode video
 */

// @lc code=start
function productExceptSelf(nums: number[]): number[] {
  const result: number[] = []

  let product = 1

  // prefix
  for (let i = 0; i < nums.length; i++) {
    result[i] = product // product from previous number
    product *= nums[i] // product for next number
  }

  product = 1

  // postfix
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= product
    product *= nums[i]
  }

  return result
}
// @lc code=end
