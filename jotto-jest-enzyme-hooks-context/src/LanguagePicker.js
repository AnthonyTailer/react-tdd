import React from 'react'
import PropTypes from 'prop-types'

export default function LanguagePicker({ setLanguage }) {
  const languages = [
    { code: 'en', flag: `https://catamphetamine.gitlab.io/country-flag-icons/3x2/US.svg` },
    { code: 'pt', flag: `https://catamphetamine.gitlab.io/country-flag-icons/3x2/BR.svg` },
  ]
  const languageIcons = languages.map(lang => (
    <button key={lang.code} data-test="language-icon" onClick={() => setLanguage(lang.code)}>
       <img alt={`language ${lang.code}`}  src={lang.flag} width={24} />
    </button>
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