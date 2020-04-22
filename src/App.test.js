import React from 'react'
import { shallow } from 'enzyme'
import App from './App'

/**
 * Factory function to create ShallowWrapper for the App Component
 * @function setup
 * @param {object} props - component props specific to this setup
 * @param {any} state - Initial state for setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}, state = null) => {
  const wrapper = shallow(<App {...props} />)
  if (state) return wrapper.setState(state)
  return wrapper
}

/**
 * Return ShallowWrapper containing node(s) with the giver data-test value.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within.
 * @param {string} val - Value of data-test attribute for search.
 * @returns {ShallowWrapper}
 */
const findByTestAtrr = (wrapper, val) => wrapper.find(`[data-test='${val}']`)

test('renders without crashing', () => {
  const wrapper = setup()
  // console.log(wrapper.debug()); Show component as string
  const appComponent = findByTestAtrr(wrapper, 'component-app')
  expect(appComponent.length).toBe(1)
  expect(wrapper).toBeTruthy()
})
