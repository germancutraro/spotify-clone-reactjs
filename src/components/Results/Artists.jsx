import React from 'react';
import LibraryItem from '../LibraryItem/LibraryItem';

const Artists = ({ name, cover }) => {
  return (
    <LibraryItem cover={cover} name={name} type='ARTIST' author='Artist' />
  );
};

export default React.memo(Artists);
