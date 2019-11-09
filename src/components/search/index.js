import React, { useState } from 'react';

import { Input } from '../';

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
      onChange={event => onChange(event.target.value)}
      onBlur={event => onSearch(event.target.value)}
    />
  );
};

export default Search;
