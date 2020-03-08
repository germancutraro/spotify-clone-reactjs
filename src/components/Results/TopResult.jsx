import React from 'react';
import { TopResultItem } from './resultsStyles';

const TopResult = ({ id, name, type, cover }) => (
  <TopResultItem
    id={id}
    name={name}
    author={type}
    type={type}
    cover={cover}
    coverSize='sm'
  ></TopResultItem>
);

export default React.memo(TopResult);
