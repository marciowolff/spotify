import React from 'react';

const List = ({ data = { tracks: { items: [] } } }) => (
  <ul className="list">
    {data &&
      data.tracks &&
      data.tracks.items.map(item => (
        <li key={item.id}>
          {item.track_number}

          {item.name}
          {item.duration_ms}
        </li>
      ))}
  </ul>
);

export default List;
