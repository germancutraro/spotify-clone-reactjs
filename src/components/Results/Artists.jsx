import React from 'react';
import LibraryItem from '../LibraryItem/LibraryItem';

const Artists = ({ id, title, cover }) => {
  return (
    <LibraryItem
      id={id}
      cover={cover}
      title={title}
      type='artist'
      subtitle='Artist'
    />
  );
};

export default React.memo(Artists);
