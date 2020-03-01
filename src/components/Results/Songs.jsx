import React from 'react';

const Songs = ({ name, artists, cover }) => {
  return (
    <div>
      <img src={cover} alt='' width={50} height={50} />
      <p>{name}</p>
      <p style={{ color: 'red' }}>{artists}</p>
    </div>
  );
};

export default React.memo(Songs);
