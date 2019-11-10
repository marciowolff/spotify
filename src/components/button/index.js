import React from 'react'
import PropTypes from 'prop-types'

import './index.scss'

const Button = ({ children, className = '', handleClick, type = 'button', ...attrs }) => {
  const Component = type === 'link' ? 'a' : 'button'
  return (
    <Component className={`button ${className}`} type={type} {...attrs} onClick={handleClick}>
      {children}
    </Component>
  )
}

Button.propTypes = {
  children: PropTypes.any,
  type: PropTypes.string,
  className: PropTypes.string,
  handleClick: PropTypes.func,
}

export default Button
