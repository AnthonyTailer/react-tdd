import React from 'react'
import { mount } from 'enzyme'
import { findByTestAttr, checkProps } from '../test/testUtils'
import Input from './Input'
import languageContext from './contexts/languageContext'
import successContext from './contexts/successContext'
import guessedWordsContext from './contexts/guessedWordsContext'

/**
 * Setup function for Input component
 * @param props {Object} - all component props
 * @return {ShallowWrapper}
 */
const setup = ({ secretWord, language, success }) => {
  secretWord = secretWord || 'party'
  language = language || 'en'
  success = success || false
  return mount(
    <languageContext.Provider value={language}>
      <successContext.SuccessProvider value={[success, jest.fn()]}>
        <guessedWordsContext.GuessedWordsProvider>
          <Input secretWord={secretWord} />
        </guessedWordsContext.GuessedWordsProvider>
      </successContext.SuccessProvider>
    </languageContext.Provider>
  )
}

describe('Language Provider tests', () => {
  test('correctly renders `submit` string in english', () => {
    const wrapper = setup({})
    const submitBtn = findByTestAttr(wrapper, 'submit-button')
    expect(submitBtn.text()).toBe('Submit')
  })

  test('correctly renders `submit` string in pt-BR', () => {
    const wrapper = setup({ language: 'pt' })
    const submitBtn = findByTestAttr(wrapper, 'submit-button')
    expect(submitBtn.text()).toBe('Manda vê🚀')
  })
})

describe('Input Component Tests', () => {
  test('renders without error', () => {
    const wrapper = setup({})
    const component = findByTestAttr(wrapper,'component-input')
    expect(component.length).toBe(1)
  })
  test('does not throw warnings when received all required props', () => {
    checkProps(Input, { secretWord: '' })
  })

  describe('state controlled input field', () => {
    let mockSetCurrentGuess = jest.fn()
    let wrapper

    beforeEach(() => {
      mockSetCurrentGuess.mockClear()
      React.useState = jest.fn(() => ["", mockSetCurrentGuess])
      wrapper = setup({})
    })

    test('state updates with value of input box upon change', () => {
      const inputBox = findByTestAttr(wrapper, 'input-box')
      const mockEvent = { target: { value: 'train' } }
      inputBox.simulate("change", mockEvent)

      expect(mockSetCurrentGuess).toHaveBeenCalledTimes(1)
      expect(mockSetCurrentGuess).toHaveBeenCalledWith('train')
    })

    test('input is cleared with empty string when form submits', () => {
      const buttonContainer = findByTestAttr(wrapper, 'submit-button')
      buttonContainer.simulate('click', )

      expect(mockSetCurrentGuess).toHaveBeenCalledWith('')
    })
  })

  test('input component does not show when success is true', () => {
    const wrapper = setup({ secretWord: 'party', success: true })
    expect(wrapper.isEmptyRender()).toBe(true)
  })

})