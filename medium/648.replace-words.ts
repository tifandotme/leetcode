/*
 * @lc app=leetcode id=648 lang=typescript
 *
 * [648] Replace Words
 */

// @lc code=start
function replaceWords(dictionary: string[], sentence: string): string {
  const words = sentence.split(" ")

  for (let i = 0; i < words.length; i++) {
    dictionary.forEach((e) => {
      if (words[i].startsWith(e)) {
        words[i] = e
      }
    })
  }

  return words.join(" ")
}
// @lc code=end
