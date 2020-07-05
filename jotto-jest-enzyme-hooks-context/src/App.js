import React from 'react'
import './App.css'
import hookActions from './actions/hookActions'
import Input from './Input'
import languageContext from './contexts/languageContext'
import successContext from './contexts/successContext'
import LanguagePicker from './LanguagePicker'
import Congrats from './Congrats'

/**
 * Reducer to update state, called automatically by dispatch
 * @param state {object} - existing state
 * @param action {object} - contains 'type' and 'payload' properties for the state updates
 *                          for example: { type: "setSecretWord", payload "party" }
 * @return {object} - new state
 */
function reducer(state, action) {
  switch(action.type) {
    case "setSecretWord":
      return { ...state, secretWord: action.payload }
    case "setLanguage":
      return { ...state, language: action.payload }
    case "setSuccess":
      return { ...state, success: action.payload }
    default:
      throw new Error(`Invalid action type: ${action.type}`)
  }
}

function App() {
  // const [secretWord, setSecretWord] = React.useState('')
  const [state, dispatch] = React.useReducer(reducer, { secretWord: null, language: 'en', success: false })

  const setSecretWord = (secretWord) => dispatch({ type: 'setSecretWord', payload: secretWord })
  const setLanguage = (language) => dispatch({ type: 'setLanguage', payload: language })
  const setSuccess = (success) => dispatch({ type: 'setSuccess', payload: success })

  React.useEffect(() => {
    hookActions.getSecretWord(setSecretWord)
  }, [])

  if(!state.secretWord) {
    return (
      <div className="container" data-test="spinner">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <p>Loading secret word</p>
      </div>
    )
  }

  return (
    <div className="container" data-test="component-app" >
      <h1>Jotto Hooks</h1>
      <languageContext.Provider value={state.language}>
        <LanguagePicker setLanguage={setLanguage} />
        <successContext.SuccessProvider>
          <Congrats />
          <Input secretWord={state.secretWord} />
        </successContext.SuccessProvider>
        {/* <GuessedWords/> */}
      </languageContext.Provider>
    </div>
  )
}

export default App
