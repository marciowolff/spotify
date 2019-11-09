import React from 'react';

import { Media } from '../../../components';

const Result = ({ value, data = { items: [] }, handleClick }) => (
  <div className="result">
    <h1>Resultados encontrados para "{value}"</h1>

    <ul>
      {data.items &&
        data.items.map(item => (
          <li
            key={item.id}
            onClick={() => (handleClick ? handleClick(item) : null)}
          >
            <Media
              title={item.name}
              mediaUrl={item.images[0].url}
              description={item.artists.map(artist => artist.name).join(', ')}
            />
          </li>
        ))}
    </ul>
  </div>
);

export default Result;
