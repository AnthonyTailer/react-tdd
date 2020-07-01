import axios from 'axios'

export const getSecretWord = async (setSecretWord) => {
  const { data } = await axios.get('https://random-word-api.herokuapp.com/word')
  const [secretWord] = data
  setSecretWord(secretWord)
}

// default export for mocking convenience
export default {
  getSecretWord
}