/*
 * @lc app=leetcode id=20 lang=typescript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
function isValid(s: string): boolean {
  const chars = s.split("")
  const stack: Array<string> = []

  for (let i = 0; i < chars.length; i++) {
    const curr = chars[i]
    const last = stack[stack.length - 1]

    if (curr === "{" || curr === "[" || curr === "(") {
      stack.push(curr)
    } else {
      if (
        last === "{" && curr === "}" ||
        last === "[" && curr === "]" ||
        last === "(" && curr === ")"
      ) {
        stack.pop()
      } else {
        return false
      }
    }
  }

  return stack.length === 0
}
// @lc code=end
