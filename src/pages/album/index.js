import React, { useEffect } from 'react';

import { withServices } from '../../services';
import { useDispatch, useSelector } from 'react-redux';
import { actionsSpotify } from '../../reducers/actions';

import { Button } from '../../components';
import Container from '../@container';
import List from './list';
import Thumb from './thumb';
import './index.scss';

export const Album = ({ service, ...props }) => {
  const { params = '' } = props.match;
  const dispatch = useDispatch();
  const reduxSpotifyAlbum = useSelector(state => state.spotify.album);

  useEffect(() => {
    if (params) {
      service.spotify.albums(params.id).then(data => {
        dispatch(actionsSpotify.setAlbum(data));
      });
    }
  }, []);

  const handleCallback = () => {
    dispatch(actionsSpotify.setAlbum({}));
    props.history.push('/home');
  };

  return (
    <Container className="page-album" {...props}>
      {reduxSpotifyAlbum && (
        <>
          <Button type="link" handleClick={handleCallback}>
            &lt; Voltar
          </Button>
          <section>
            <Thumb className="album-thumb" data={reduxSpotifyAlbum} />
            <List data={reduxSpotifyAlbum} />
          </section>
        </>
      )}
    </Container>
  );
};
export default withServices(Album);
