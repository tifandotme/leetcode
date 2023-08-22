/*
 * @lc app=leetcode id=682 lang=typescript
 *
 * [682] Baseball Game
 */

// @lc code=start
function calPoints(operations: string[]): number {
  const scores: number[] = []
  let sum = 0

  for (let i = 0; i < operations.length; i++) {
    if (Number(operations[i])) {
      scores.push(Number(operations[i]))
      sum += scores[scores.length - 1]
      continue
    }

    switch (operations[i]) {
      case "+":
        scores.push(scores[scores.length - 1] + scores[scores.length - 2])
        sum += scores[scores.length - 1]
        break
      case "D":
        scores.push(scores[scores.length - 1] * 2)
        sum += scores[scores.length - 1]
        break
      case "C":
        sum -= scores.pop()!
        break
    }
  }

  return sum
}
// @lc code=end
