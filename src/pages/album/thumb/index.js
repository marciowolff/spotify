import React from 'react';

import { Media } from '../../../components';

const Thumb = ({ className = '', data = {} }) => (
  <aside className={`thumb ${className}`}>
    <Media
      title={data.name}
      imageUrl={data.images ? data.images[0].url : null}
      description={
        data.artists ? data.artists.map(artist => artist.name).join(', ') : null
      }
    />
  </aside>
);

export default Thumb;
