import React from 'react'
import './App.css'
import hookActions from "./actions/hookActions";

function App() {
  const [secretWord, setSecretWord] = React.useState('')
  React.useEffect(() => {
    hookActions.getSecretWord(setSecretWord)
  }, [])
  return (
    <div className="App" data-test="component-app" >
      {secretWord}
    </div>
  )
}

export default App
