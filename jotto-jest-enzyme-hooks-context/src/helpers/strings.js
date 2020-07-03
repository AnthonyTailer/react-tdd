const languageStrings = {
  en: {
    congrats: 'Congratulations! You guessed the word!',
    submit: 'Submit',
    guessPrompt: 'Try to guess the secret word!',
    guessInputPlaceholder: 'enter guess',
    guessColumnHeader: 'Guessed Words',
    guessedWords: 'Guesses',
    matchingLettersColumnHeader: 'Matching Letters',
  },
  pt: {
    congrats: 'Parabáins! Você adivinhou essa porra, se é o bichão mesmo ein doido🎯🎉!',
    submit: 'Manda vê🚀',
    guessPrompt: '🤔🤫🔤Duvido tu adivinhar essa bosta!',
    guessInputPlaceholder: 'digita aqui uma palavrinha',
    guessColumnHeader: 'Palavaras descobridas🤷‍',
    guessedWords: '🤷‍🔤Palavras que o sabicão acertou',
    matchingLettersColumnHeader: 'Quantas letra são ingual',
  },
  ru: {

  }
}

function getStringByLanguage(languageCode, stringKey, strings = languageStrings) {
  if (!strings[languageCode] || !strings[languageCode][stringKey]) {
    console.warn(`Could not get string [${stringKey}] for [${languageCode}]`)
    // fall back to english
    return strings.en[stringKey];
  }

  return strings[languageCode][stringKey]
}

// for future mocking
export default {
  getStringByLanguage,
}