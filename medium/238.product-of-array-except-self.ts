/*
 * @lc app=leetcode id=238 lang=typescript
 *
 * [238] Product of Array Except Self
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
