import React from 'react';

const TrackItem = ({ name, artists, album }) => {
  return (
    <tr>
      <td style={{ fontSize: '.7rem' }}>{name}</td>
      <td style={{ fontSize: '.7rem' }}>{artists[0].name}</td>
      <td style={{ fontSize: '.7rem' }}>{album.name}</td>
    </tr>
  );
};

export default React.memo(TrackItem);
