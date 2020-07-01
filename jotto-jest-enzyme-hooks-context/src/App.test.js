import React from 'react'
import { shallow } from 'enzyme'
import { findByTestAttr } from '../test/testUtils'
import App from './App'
import hookActions from "./actions/hookActions";

const mockGetSecretWord = jest.fn()
/**
 * Setup function for app component
 * @return {ShallowWrapper}
 */
const setup = (props = {}) => {
  mockGetSecretWord.mockClear()
  hookActions.getSecretWord = mockGetSecretWord
  return shallow(<App {...props} />)
}

describe('App main component tests', () => {
  let useEffect

  beforeEach(() => {
    useEffect = jest.spyOn(React, "useEffect").mockImplementation(f => f());
  })

  test('renders learn react link', () => {
    const wrapper = setup()
    const component = findByTestAttr(wrapper, 'component-app')
    expect(component.length).toBe(1);
  });

  test('getSecretWord gets called on App mount', () => {
    setup()
    expect(mockGetSecretWord).toHaveBeenCalledTimes(1)
  })
})
