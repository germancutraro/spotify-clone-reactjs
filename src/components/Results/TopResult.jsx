import React from 'react';
import { TopResultItem } from './resultsStyles';

const TopResult = props => {
  console.log(props);
  return (
    <TopResultItem
      name={props.name}
      type={props.type}
      cover={props.cover}
    ></TopResultItem>
  );
};

export default React.memo(TopResult);
