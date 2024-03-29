import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { auth } from 'spotify-service';

import './index.scss';
import Logo from '../../assets/images/logo.svg';

const Container = ({ children, history, location, className }) => {
  useEffect(() => {
    if (!auth.isAuthenticated() && location.pathname !== '/') {
      history.push('/');
    }
  }, []);

  return (
    <>
      <header className="page-header">
        <img id="logo" src={Logo}></img>
      </header>
      <main className={`container ${className}`}>{children}</main>
    </>
  );
};

Container.propTypes = {
  children: PropTypes.any,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export default Container;
