/*
 * @lc app=leetcode id=1 lang=typescript
 *
 * [1] Two Sum
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
  const dict = new Map<number, number>()

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    const complement = target - num

    if (dict.has(complement)) {
      return [dict.get(complement)!, i]
    }

    dict.set(num, i)
  }

  return []
}
// @lc code=end
