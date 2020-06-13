import { getLetterMathCount } from './index'

describe('getLetterMathCount', () => {
  const secretWord = 'party'
  test('returns correct count when there are no matching letters', () => {
    const letterMatchCount = getLetterMathCount('bones', secretWord)
    expect(letterMatchCount).toBe(0)
  })
  test('returns the correct count when there are 3 matching lettters', () => {
    const letterMatchCount = getLetterMathCount('train', secretWord)
    expect(letterMatchCount).toBe(3)
  })
  test('returns the correct count when there are duplicate letters in the guess', () => {
    const letterMatchCount = getLetterMathCount('papa', secretWord)
    expect(letterMatchCount).toBe(2)
  })
})
