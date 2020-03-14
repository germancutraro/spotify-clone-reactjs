import React from 'react';
import { useSelector } from 'react-redux';

const Track = () => {
  const { song } = useSelector(({ track }) => track);
  return (
    <div style={{ gridArea: 'player', height: 90, backgroundColor: '#333' }}>
      <p style={{ color: '#fff' }}>{song.name}</p>
    </div>
  );
};

export default Track;
