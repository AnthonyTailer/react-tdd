import React from 'react'
import PropTypes from 'prop-types'

const GuessedWords = (props) => {
  const { guessedWords } = props
  let contents

  if (Array.isArray(guessedWords) && !guessedWords.length) {
    contents = (
        <h5 data-test="guess-instructions" >Try to guess the secret word!</h5>
    )
  }

  return (
    <div data-test="component-guessed-words">
      { contents }
    </div>
  )
}

GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired
    })
  ).isRequired
}

export default GuessedWords