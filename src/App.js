import React from 'react'
import './App.css'
import Congrats from './components/Congrats/Congrats'
import GuessedWords from './components/GuessedWords/GuessedWords'

const App = () => (
  <div className="container" data-test="component-app">
    <h1>Jotto Fucking Jest!</h1>
    <Congrats success />
    <GuessedWords guessedWords={[{ guessedWord: 'train', letterMatchCount: 3 }]} />
  </div>
)

export default App
