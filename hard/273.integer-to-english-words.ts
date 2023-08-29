/*
 * @lc app=leetcode id=273 lang=typescript
 *
 * [273] Integer to English Words
 *
 * Time: O(n)
 * Space: O(1)
 */

// @lc code=start
const translations: Record<number, string> = {
  0: "Zero",
  1: "One",
  2: "Two",
  3: "Three",
  4: "Four",
  5: "Five",
  6: "Six",
  7: "Seven",
  8: "Eight",
  9: "Nine",
  10: "Ten",
  11: "Eleven",
  12: "Twelve",
  13: "Thirteen",
  14: "Fourteen",
  15: "Fifteen",
  16: "Sixteen",
  17: "Seventeen",
  18: "Eighteen",
  19: "Nineteen",
  20: "Twenty",
  30: "Thirty",
  40: "Forty",
  50: "Fifty",
  60: "Sixty",
  70: "Seventy",
  80: "Eighty",
  90: "Ninety",
  100: "Hundred",
  1_000: "Thousand",
  1_000_000: "Million",
  1_000_000_000: "Billion",
}

function numberToWords(num: number): string {
  if (num === 0) return translations[0]

  let result = ""

  if (num >= 1_000_000_000) {
    const billion = Math.floor(num / 1_000_000_000)
    result += `${convert(billion)} Billion`

    num -= billion * 1_000_000_000
  }

  if (num >= 1_000_000) {
    const million = Math.floor(num / 1_000_000)
    result += `${convert(million)} Million`

    num -= million * 1_000_000
  }

  if (num >= 1_000) {
    const thousand = Math.floor(num / 1_000)
    result += `${convert(thousand)} Thousand`

    num -= thousand * 1_000
  }

  if (num > 0) {
    result += convert(num)
  }

  return result.trim()
}

function convert(num: number): string {
  let result = ""

  if (num >= 100) {
    const hundred = Math.floor(num / 100)
    result += ` ${translations[hundred]} Hundred`

    num -= hundred * 100
  }

  if (num > 0) {
    if (num <= 20) {
      result += ` ${translations[num]}`
    } else {
      const ten = Math.floor(num / 10)
      result += ` ${translations[ten * 10]}`

      const one = num % 10
      if (one > 0) {
        result += ` ${translations[one]}`
      }
    }
  }

  return result
}
// @lc code=end
