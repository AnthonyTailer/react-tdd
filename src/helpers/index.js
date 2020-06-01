/**
 *  @method getLetterMathCount
 *  @param {string} guessedWord
 *  @param {string} secretWord
 *  @returns {number} - Number of letters matched between guessed word and secret word
 */
export function getLetterMathCount(guessedWord, secretWord) {
  const secretLetterSet = new Set(secretWord.split(''))
  const guessedLetterSet = new Set(guessedWord.split(''))
  return [...secretLetterSet].filter(letter => guessedLetterSet.has(letter)).length
}
