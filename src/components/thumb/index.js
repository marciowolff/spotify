import React from 'react';

import { Media } from '../';

const Thumb = ({ data = {} }) => (
  <aside className="thumb">
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
