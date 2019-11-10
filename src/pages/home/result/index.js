import React from 'react';

import { Media } from '../../../components';
import './index.scss';

const Result = ({
  value,
  data = { items: [] },
  className = '',
  handleClick,
}) => (
  <div className={className}>
    {value && <h1 className="h2">Resultados encontrados para "{value}"</h1>}

    <ul className="result-ul">
      {data.items &&
        data.items.map(item => (
          <li
            key={item.id}
            onClick={() => (handleClick ? handleClick(item) : null)}
          >
            <Media
              className="media-link"
              title={item.name}
              imageUrl={item.images[0].url}
              description={item.artists.map(artist => artist.name).join(', ')}
            />
          </li>
        ))}
    </ul>
  </div>
);

export default Result;
