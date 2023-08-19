/*
 * @lc app=leetcode id=217 lang=typescript
 *
 * [217] Contains Duplicate
 */

// @lc code=start
function containsDuplicate(nums: number[]): boolean {
  // const set = new Set(nums)
  // return set.size !== nums.length

  const set = new Set()

  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) {
      return true
    }

    set.add(nums[i])
  }

  return false
}

// @lc code=end
