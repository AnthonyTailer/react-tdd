import checkPropTypes from 'check-prop-types'

/**
 * Return ShallowWrapper containing node(s) with the giver data-test value.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within.
 * @param {string} val - Value of data-test attribute for search.
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test='${val}']`)
}

/**
 * expect no errors on component prop-types.
 * @param {JSX.Element} component - React component with prop-types
 * @param {object} conformingProps - props
 * @returns {Boolean}
 */
export const checkProps = (component, conformingProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    conformingProps,
    'prop',
    component.name,
    (stack) => {
      console.log(stack)
    }
  )
  expect(propError).toBeUndefined()
}