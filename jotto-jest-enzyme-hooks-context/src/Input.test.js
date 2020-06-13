import React from 'react'
import { shallow } from 'enzyme'
import { findByTestAttr, checkProps } from '../test/testUtils'
import Input from './Input'

/**
 * Setup function for Input component
 * @param props {Object} - all component props
 * @return {ShallowWrapper}
 */
const setup = (props = { secretWord: '' }) => {
  return shallow(<Input {...props} />)
}

describe('Input Component Tests', () => {
  test('renders without error', () => {
    const wrapper = setup()
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
      wrapper = setup()
    })

    test('state updates with value of input box upon change', () => {
      const inputBox = findByTestAttr(wrapper, 'input-box')
      const mockEvent = { target: { value: 'train' } }
      inputBox.simulate("change", mockEvent)

      expect(mockSetCurrentGuess).toHaveBeenCalledTimes(1)
      expect(mockSetCurrentGuess).toHaveBeenCalledWith('train')
    })

    test('input is cleared with empty string when form submits', () => {
      const formContainer = findByTestAttr(wrapper, 'form-container')
      formContainer.simulate('submit', { preventDefault: () => {} })

      expect(mockSetCurrentGuess).toHaveBeenCalledTimes(1)
      expect(mockSetCurrentGuess).toHaveBeenCalledWith('')
    })
  })

})