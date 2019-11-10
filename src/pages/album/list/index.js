import React from 'react';
import './index.scss';

const List = ({ data = { tracks: { items: [] } } }) => (
  <ul className="list">
    {data &&
      data.tracks &&
      data.tracks.items.map(item => (
        <li key={item.id}>
          <span className="number">{item.track_number}.</span>

          <span className="name">{item.name}</span>
          <span className="duration">{item.duration_ms}</span>
        </li>
      ))}
  </ul>
);

export default List;
