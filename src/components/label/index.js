import React from 'react'
import PropTypes from 'prop-types'

const Label = ({ children, ...attrs }) => (
  <label {...attrs}>{children}</label>
)

Label.propTypes = {
  htmlFor: PropTypes.string,
  children: PropTypes.any
}

export default Label
