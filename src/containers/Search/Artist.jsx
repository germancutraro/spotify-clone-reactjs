import React from 'react';
import { useParams } from 'react-router-dom';

const Artist = () => {
  const { name } = useParams();
  return (
    <div style={{ color: '#fff' }}>
      <h1>Artist: {name}</h1>
    </div>
  );
};

export default Artist;
