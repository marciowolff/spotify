import React from 'react';
import PropTypes from 'prop-types';

import logo from '../../assets/images/image-not-found.svg';

const Media = ({ imageUrl = logo, title, description, className }) => (
  <figure className={`media ${className}`}>
    <img
      alt={`${title ? title : ''} - ${description ? description : ''}`}
      src={imageUrl}
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
