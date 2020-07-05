import React from 'react'
import PropTypes from 'prop-types'
import languageContext from './contexts/languageContext'
import strings from './helpers/strings'

Input.propTypes = {
 secretWord: PropTypes.string.isRequired
}

export default function Input({ secretWord }) {
  const [ currentGuess, setCurrentGuess ] = React.useState('')
  const language = React.useContext(languageContext)

  const handleCurrentGuess = (e) => setCurrentGuess(e.target.value)

  const handleSubmit = (e) => {
    e.preventDefault()
    // call something
    setCurrentGuess('')
  }

  return (
    <div data-test="component-input" >
      <form className="form-inline"  data-test="form-container" onSubmit={handleSubmit}>
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
        >
          {strings.getStringByLanguage(language, 'submit')}
        </button>
      </form>
    </div>
  )
}