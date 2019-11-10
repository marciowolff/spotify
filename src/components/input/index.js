import React from 'react';
import PropTypes from 'prop-types';
import { Label } from '../';
import './index.scss';

const Input = ({
  id,
  type,
  label,
  placeholder,
  className = '',
  handleChange,
  onclick,
  ...attrs
}) => (
  <div className={`input-container ${className ? className : ''}`}>
    {label && (
      <Label className="label" htmlFor={id}>
        {label}
      </Label>
    )}

    <input
      id={id}
      type={type ? type : 'text'}
      className="input"
      placeholder={placeholder}
      onChange={handleChange}
      onClick={onclick}
      {...attrs}
    />
  </div>
);

Input.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  label: PropTypes.string,
  className: PropTypes.string,
  handleChange: PropTypes.func,
  onclick: PropTypes.func,
};

export default Input;
