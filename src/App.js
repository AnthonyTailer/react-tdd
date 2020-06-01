import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './App.css'
import Congrats from './components/Congrats/Congrats'
import GuessedWords from './components/GuessedWords/GuessedWords'
import Input from './components/Input/Input'
import { getSecretWord } from './store/actions'

export class UnconnectedApp extends React.Component {
  componentDidMount() {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.getSecretWord()
  }

  render() {
    const { success, guessedWords, secretWord } = this.props
    return (
      <div className="container" data-test="component-app">
        <h1>Jotto Fucking Jest! The secret word is {secretWord} </h1>
        <Input success={success} />
        <Congrats success={success} />
        <GuessedWords guessedWords={guessedWords} />
      </div>
    )
  }
}

UnconnectedApp.propTypes = {
  success: PropTypes.bool.isRequired,
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired,
    })
  ),
  secretWord: PropTypes.string.isRequired,
  getSecretWord: PropTypes.func.isRequired,
}

UnconnectedApp.defaultProps = {
  guessedWords: [{ guessedWord: 'train', letterMatchCount: 3 }],
}

const mapStateToProps = state => ({
  success: state.success,
  guessedWords: state.guessedWords,
  secretWord: state.secretWord,
})

export default connect(mapStateToProps, { getSecretWord })(UnconnectedApp)
