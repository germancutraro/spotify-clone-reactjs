import React from 'react';
import { TopResultItem } from './resultsStyles';

const TopResult = ({ id, title, type, cover }) => (
  <TopResultItem
    id={id}
    title={title}
    type={type}
    cover={cover}
    cardType='topResult'
    tag={type}
  ></TopResultItem>
);

export default React.memo(TopResult);
