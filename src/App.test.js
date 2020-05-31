import React from 'react'
import { shallow } from 'enzyme'
import App, { UnconnectedApp } from './App'
import { storeFactory, findByTestAttr } from '../test/testUtils'

/**
 * Factory function to create ShallowWrapper for the App Component
 * @function setup
 * @param {any} state - Initial state for setup
 * @returns {ShallowWrapper}
 */
const setup = (state = {}) => {
  const store = storeFactory(state)
  const wrapper = shallow(<App store={store} />)
    .dive()
    .dive()
  return wrapper
}

test('renders without crashing', () => {
  const wrapper = setup()
  // console.log(wrapper.debug()); Show component as string
  const appComponent = findByTestAttr(wrapper, 'component-app')
  expect(appComponent.length).toBe(1)
  expect(wrapper).toBeTruthy()
})

describe('receive redux props', () => {
  test('has access to `success` piece of state', () => {
    const success = true
    const wrapper = setup({ success })
    const successProp = wrapper.instance().props.success
    expect(successProp).toBe(success)
  })

  test('has access to `secretWord` piece of state', () => {
    const secretWord = 'party'
    const wrapper = setup({ secretWord })
    const secretWordProp = wrapper.instance().props.secretWord
    expect(secretWordProp).toBe(secretWord)
  })

  test('has access to `guessedWords` state', () => {
    const guessedWords = [{ guessedWord: 'train', letterMatchCount: 3 }]
    const wrapper = setup({ guessedWords })
    const guessedWordsProp = wrapper.instance().props.guessedWords
    expect(guessedWordsProp).toEqual(guessedWords)
  })

  test(' `getSecretWord` action creator is a function on the props', () => {
    const wrapper = setup()
    const getSecretWordProp = wrapper.instance().props.getSecretWord
    expect(getSecretWordProp).toBeInstanceOf(Function)
  })

  test('`getSecretWord` runs on App mount', () => {
    const getSecretWordMock = jest.fn()

    // set up app component getSecretWordMock as the getSecretWord prop
    const wrapper = shallow(
      <UnconnectedApp getSecretWord={getSecretWordMock} success={false} guessedWords={[]} secretWord="" />
    )

    // run lifecycle method
    wrapper.instance().componentDidMount()

    // check to see if mock ran
    const getSecretWordCallCount = getSecretWordMock.mock.calls.length

    expect(getSecretWordCallCount).toBe(1)
  })
})
