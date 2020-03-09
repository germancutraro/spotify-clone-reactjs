import React from 'react';
import LibraryItem from '../LibraryItem/LibraryItem';

const Artists = ({ title, cover }) => {
  return (
    <LibraryItem cover={cover} title={title} type='ARTIST' subtitle='Artist' />
  );
};

export default React.memo(Artists);
