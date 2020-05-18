/**
 * @function guessWordsReducer
 * @param {array} state - Array of guessed words
 * @param {object} action - action to be reduced
 * @returns {boolean} - new success state
 */
import { actionTypes } from '../actions'

export default (state = [], action) => {
  switch (action.type) {
    case actionTypes.GUESS_WORD:
      return [...state, action.payload]
    default:
      return state
  }
}
