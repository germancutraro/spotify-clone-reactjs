import React from 'react';

const Songs = ({ name, artists }) => {
  return (
    <div>
      <img
        src={'https://i.musicaimg.com/letras/max/2384532.jpg'}
        alt=''
        width={50}
        height={50}
      />
      <p>{name}</p>
      <p style={{ color: 'red' }}>{artists}</p>
    </div>
  );
};

export default React.memo(Songs);
