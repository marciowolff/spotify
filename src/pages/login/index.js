import React, { useState, useEffect } from 'react';
import SpotifyLogin from 'react-spotify-login';

import { CLIENT_ID, SPOTIFY_URL } from '../../constants';
import { auth } from 'spotify-service';

import Container from '../@container';

const Login = props => {
  const [erroMessage, setErroMessage] = useState('');

  useEffect(() => {
    if (auth.isAuthenticated()) props.history.push('/home');
  }, []);

  const onSuccess = ({ access_token }) => {
    auth.setToken(access_token);
    props.history.push('/home');
  };

  return (
    <Container className="page-home" {...props}>
      <SpotifyLogin
        clientId={CLIENT_ID}
        redirectUri={SPOTIFY_URL[process.env.ENV]}
        onSuccess={onSuccess}
      />
    </Container>
  );
};
export default Login;
