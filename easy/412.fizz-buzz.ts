/*
 * @lc app=leetcode id=412 lang=typescript
 *
 * [412] Fizz Buzz
 */

// @lc code=start
function fizzBuzz(n: number): string[] {
  const answer: string[] = []

  for (let i = 1; i <= n; i++) {
    let str = ""
    if (i % 3 == 0) str += "Fizz"
    if (i % 5 == 0) str += "Buzz"

    answer.push(str.length === 0 ? String(i) : str)
  }

  return answer
}
// @lc code=end
