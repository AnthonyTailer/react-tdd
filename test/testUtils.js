import checkPropTypes from 'check-prop-types'
import { createStore } from 'redux'

import { Provider } from 'react-redux'
import React from 'react'
import rootReducer from '../src/store/reducers'

/**
 * Return ShallowWrapper containing node(s) with the giver data-test value.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within.
 * @param {string} val - Value of data-test attribute for search.
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`)

/**
 * expect no errors on component prop-types.
 * @param {JSX.Element} component - React component with prop-types
 * @param {object} conformingProps - props
 * @returns {Boolean}
 */
export const checkProps = (component, conformingProps) => {
  const propError = checkPropTypes(component.propTypes, conformingProps, 'prop', component.name, stack => {
    console.log(stack)
  })
  expect(propError).toBeUndefined()
}

/**
 * Create a testing store with imported reducers. middleware, and initial state
 * globals: rootReducer
 * @param {object} initialState - initial state for the store
 * @function storeFactory
 * @returns {Store} - Redux Store
 */
export const storeFactory = initialState => createStore(rootReducer, initialState)

/**
 * Create a test Provider passing redux store
 * @param props
 * @function shallowProvider
 * @return {Provider}
 */
export const ShallowProvider = props => {
  const { children, store } = props
  return <Provider store={store}>{children}</Provider>
}
