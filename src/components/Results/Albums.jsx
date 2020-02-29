import React from 'react';

const Albums = ({ name, artist, cover }) => {
  return (
    <div>
      <img src={cover} alt='' width={60} height={60} />
      <p>{name}</p>
      <p>{artist}</p>
    </div>
  );
};

export default React.memo(Albums);
