/*
 * @lc app=leetcode id=1768 lang=typescript
 *
 * [1768] Merge Strings Alternately
 */

// @lc code=start
function mergeAlternately(word1: string, word2: string): string {
  const longest = word1.length >= word2.length ? word1.length : word2.length;

  let str = "";
  for (let i = 0; i < longest; i++) {
    str += `${word1[i] || ""}${word2[i] || ""}`;
  }

  return str;
}
// @lc code=end
