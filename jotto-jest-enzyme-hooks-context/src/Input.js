import React from 'react'
import PropTypes from 'prop-types'
import languageContext from './contexts/languageContext'
import successContext from './contexts/successContext'
import guessedWordsContext from './contexts/guessedWordsContext'
import strings from './helpers/strings'
import { getLetterMatchCount } from './helpers'

Input.propTypes = {
 secretWord: PropTypes.string.isRequired
}

export default function Input({ secretWord }) {
  const [ currentGuess, setCurrentGuess ] = React.useState('')
  const [success, setSuccess] = successContext.useSuccess()
  const [guessedWords, setGuessedWords] = guessedWordsContext.useGuessedWords()
  const language = React.useContext(languageContext)

  const handleCurrentGuess = (e) => setCurrentGuess(e.target.value)

  const handleSubmit = (e) => {
    e.preventDefault()
    const letterMatchCount = getLetterMatchCount(currentGuess, secretWord)
    // update guessedWords
    setGuessedWords([...guessedWords, { guessedWord: currentGuess, letterMatchCount }])

    // check against secretWord and update success
    if (currentGuess === secretWord) {
      setSuccess(true)
    }
    // cleanig the input box
    setCurrentGuess('')
  }

  if (success) {
    return null
  }

  return (
    <div data-test="component-input" >
      <form className="form-inline"  data-test="form-container">
        <input
          value={currentGuess}
          onChange={handleCurrentGuess}
          data-test="input-box"
          className="mb-2 mx-sm-3"
          type="text"
          placeholder={strings.getStringByLanguage(language, 'guessInputPlaceholder')}
        />
        <button
          type="submit"
          data-test="submit-button"
          className="btn btn-primary mb-2"
          onClick={handleSubmit}
        >
          {strings.getStringByLanguage(language, 'submit')}
        </button>
      </form>
    </div>
  )
}