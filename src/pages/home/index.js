import React, { useState } from 'react';

import services from '../../services';
import { useDispatch, useSelector } from 'react-redux';
import { actionsSpotify } from '../../reducers/actions';

import Container from '../@container';
import { Search } from '../../components';
import Result from './result';

const Home = props => {
  const [searchValue, setSearchValue] = useState('');
  const dispatch = useDispatch();
  const reduxSpotify = useSelector(state => state.spotify.list);

  const handleSearch = search => {
    setSearchValue(search);

    if (search !== searchValue) {
      services()
        .spotify.search(search)
        .then(data => {
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
        onSearch={handleSearch}
      />
      <Result
        value={searchValue}
        data={reduxSpotify}
        handleClick={handleClick}
      />
    </Container>
  );
};
export default Home;
