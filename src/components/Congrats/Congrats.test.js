import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'
import Congrats from './Congrats'
import { findByTestAttr } from '../../../test/testUtils'

Enzyme.configure({ adapter: new EnzymeAdapter() })

/**
 * Factory function to create ShallowWrapper for the Congrats Component
 * @function setup
 * @param {object} props - component props specific to this setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  return shallow(<Congrats {...props} />)
}

test('renders witout error', () => {
  const wrapper = setup()
  const congratsComponent = findByTestAttr(wrapper, "component-congrats")
  expect(congratsComponent.length).toBe(1)
})

test('renders no text when `success` prop is false', () => {
  const wrapper = setup({ success: false })
  const congratsComponent = findByTestAttr(wrapper, "component-congrats")
  expect(congratsComponent.text()).toBe('')
})

test('renders non-empty congrats message when `success` prop is true', () => {
  const wrapper = setup({ success: true })
  const congratsComponent = findByTestAttr(wrapper, "congrats-message")
  expect(congratsComponent.text().length).not.toBe(0)
})
