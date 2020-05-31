import React from 'react'
import { shallow } from 'enzyme'
import { findByTestAttr, storeFactory } from '../../../test/testUtils'
import Input from './Input'

/**
 * Factory function to create ShallowWrapper for the Input Component
 * @function setup
 * @param {object} props - component props specific to this setup
 * @returns {ShallowWrapper}
 */
const setup = (initialState = {}) => {
  const store = storeFactory(initialState)
  const wrapper = shallow(<Input store={store} />)
    .dive()
    .dive()
  return wrapper
}

describe('render Input component', () => {
  describe('word has not been guessed', () => {
    let wrapper
    beforeEach(() => {
      const initialState = { success: false }
      wrapper = setup(initialState)
    })
    test('renders component without error', () => {
      const component = findByTestAttr(wrapper, 'component-input')
      expect(component.length).toBe(1)
    })
    test('renders the input box', () => {
      const component = findByTestAttr(wrapper, 'input-box')
      expect(component.length).toBe(1)
    })
    test('renders the submit button', () => {
      const component = findByTestAttr(wrapper, 'submit-button')
      expect(component.length).toBe(1)
    })
  })

  describe('word has been guessed', () => {
    let wrapper
    beforeEach(() => {
      const initialState = { success: true }
      wrapper = setup(initialState)
    })
    test('renders component without error', () => {
      const component = findByTestAttr(wrapper, 'component-input')
      expect(component.length).toBe(1)
    })
    test('does not render the input box', () => {
      const inputBox = findByTestAttr(wrapper, 'input-box')
      expect(inputBox.length).toBe(0)
    })
    test('does not render the submit button', () => {
      const submitButton = findByTestAttr(wrapper, 'submit-button')
      expect(submitButton.length).toBe(0)
    })
  })
})

describe('redux props', () => {
  test('has success piece of state as prop', () => {
    const success = true
    const wrapper = setup({ success })
    const successProp = wrapper.instance().props.success
    expect(successProp).toBe(success)
  })
  test('`guessedWord` action creator is a function prop', () => {
    const wrapper = setup()
    const guessWordProp = wrapper.instance().props.guessWord
    expect(guessWordProp).toBeInstanceOf(Function)
  })
})
