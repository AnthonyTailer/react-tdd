import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './App.css'
import Congrats from './components/Congrats/Congrats'
import GuessedWords from './components/GuessedWords/GuessedWords'
import Input from './components/Input/Input'
import { getSecretWord } from './store/actions'

class App extends React.Component {
  componentDidMount() {
    const { getSecretWord } = this.props
    getSecretWord()
  }

  render() {
    const { success, guessedWords } = this.props
    return (
      <div className="container" data-test="component-app">
        <h1>Jotto Fucking Jest!</h1>
        <Input success={success} />
        <Congrats success={success} />
        <GuessedWords guessedWords={guessedWords} />
      </div>
    )
  }
}

App.propTypes = {
  success: PropTypes.bool.isRequired,
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired,
    })
  ),
  secretWord: PropTypes.string.isRequired,
}

App.defaultProps = {
  guessedWords: [{ guessedWord: 'train', letterMatchCount: 3 }],
}

const mapStateToProps = state => ({
  success: state.success,
  guessedWords: state.guessedWords,
  secretWord: state.secretWord,
})

const mapDispatchToProps = dispatch => {
  dispatch(getSecretWord())
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
