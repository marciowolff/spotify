import React, { useState } from 'react';

import { Input } from '../../../components';

const Search = ({ id, label, placeholder, onChange, onSearch }) => {
  const [search, setSearch] = useState('');

  return (
    <Input
      id={id}
      label={label}
      placeholder={placeholder}
      onKeyUp={event =>
        event.key === 'Enter' ? onSearch(event.target.value) : null
      }
      onChange={event => (onChange ? onChange(event.target.value) : null)}
      onBlur={event => onSearch(event.target.value)}
    />
  );
};

export default Search;
