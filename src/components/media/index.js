import React from 'react';
import PropTypes from 'prop-types';

import logo from './image-not-found.svg';
import './index.scss';

const Media = ({ imageUrl = logo, title, description, className = '' }) => (
  <figure className={`media ${className}`}>
    <img
      alt={`${title ? title : ''} - ${description ? description : ''}`}
      src={imageUrl ? imageUrl : logo}
    />
    <figcaption>
      <span>{title} </span>
      {description}
    </figcaption>
  </figure>
);

Media.propTypes = {
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  className: PropTypes.string,
  description: PropTypes.string,
};

export default Media;
