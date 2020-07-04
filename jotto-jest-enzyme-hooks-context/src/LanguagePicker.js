import React from 'react'
import PropTypes from 'prop-types'

export default function LanguagePicker({ setLanguage }) {
  const languages = [
    { code: 'en', flag: `https://catamphetamine.gitlab.io/country-flag-icons/3x2/us.svg` },
    { code: 'pt', flag: `https://catamphetamine.gitlab.io/country-flag-icons/3x2/br.svg` },
  ]
  const languageIcons = languages.map(lang => (
    <span key={lang.code} data-test="language-icon" onClick={() => setLanguage(lang.code)}>
       <img src={lang.flag} width={24} height={16} />
    </span>
  ))

  return (
    <div data-test="component-language-picker">
      {languageIcons}
    </div>
  )
}

LanguagePicker.propTypes = {
  setLanguage: PropTypes.func.isRequired,
}