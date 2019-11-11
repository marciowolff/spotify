import React, { useState } from 'react';

import { withServices } from '../../services';
import { useDispatch, useSelector } from 'react-redux';
import { actionsSpotify } from '../../reducers/actions';

import Container from '../@container';
import Search from './search';
import Result from './result';

import './index.scss';

export const Home = ({ service, ...props }) => {
  const [searchValue, setSearchValue] = useState('');
  const dispatch = useDispatch();
  const reduxSpotify = useSelector(state => state.spotify.list);

  const handleSearch = search => {
    setSearchValue(search);

    if (search !== searchValue) {
      service.spotify.search(search).then(data => {
        dispatch(actionsSpotify.setList(data.albums));
      });
    }
  };

  const handleClick = item => {
    props.history.push(`album/${item.id}`);
  };

  return (
    <Container className="page-home" {...props}>
      <Search
        id="search"
        label="Busque por artistas, álbuns ou músicas"
        placeholder="Comece a escrever..."
        onSearch={handleSearch}
      />
      <Result
        className="container-result"
        value={searchValue}
        data={reduxSpotify}
        handleClick={handleClick}
      />
    </Container>
  );
};
export default withServices(Home);
