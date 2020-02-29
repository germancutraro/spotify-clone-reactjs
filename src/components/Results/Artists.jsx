import React from 'react';
import { ReactComponent as DefaultCover } from '../../assets/icons/defaultCover.svg';

const Artists = ({ name, cover }) => {
  return (
    <div>
      {cover ? (
        <img src={cover} alt='' width={100} height={100} />
      ) : (
        <DefaultCover width={100} height={100} />
      )}
      <p>{name}</p>
    </div>
  );
};

export default React.memo(Artists);
