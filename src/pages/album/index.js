import React, { useEffect } from 'react';

import services from '../../services';
import { useDispatch, useSelector } from 'react-redux';
import { actionsSpotify } from '../../reducers/actions';

import Container from '../@container';
import { List, Thumb } from '../../components';

const Album = props => {
  const { params = '' } = props.match;
  const dispatch = useDispatch();
  const reduxSpotifyAlbum = useSelector(state => state.spotify.album);

  useEffect(() => {
    if (params) {
      services()
        .spotify.albums(params.id)
        .then(data => {
          dispatch(actionsSpotify.setAlbum(data));
        });
    }
  }, []);

  return (
    <Container className="page-album" {...props}>
      {reduxSpotifyAlbum && (
        <>
          <button onClick={() => props.history.push('/home')}>Voltar</button>
          <Thumb data={reduxSpotifyAlbum} />
          <List data={reduxSpotifyAlbum} />
        </>
      )}
      }
    </Container>
  );
};
export default Album;
