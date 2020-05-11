import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class Input extends Component {
  render() {
    const { success } = this.props
    const content = success ? null : (
      <form className="form-inline">
        <input data-test="input-box" className="mb-2 mx-sm-3" type="text" placeholder="enter guess" />
        <button data-test="submit-button" className="btn btn-primary mb-2" type="submit">
          Submit
        </button>
      </form>
    )

    return <div data-test="component-input">{content}</div>
  }
}

const mapStateToProps = state => ({ success: state.success })

export default connect(mapStateToProps)(Input)

Input.propTypes = {
  success: PropTypes.bool.isRequired,
}
