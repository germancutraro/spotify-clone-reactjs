import React from 'react';
import LibraryItem from '../LibraryItem/LibraryItem';

const TopResult = ({ id, title, type, cover }) => (
  <LibraryItem
    id={id}
    title={title}
    type={type}
    cover={cover}
    cardType='topResult'
    tag={type}
  ></LibraryItem>
);

export default React.memo(TopResult);
