import React from 'react';
import {
  NoResultsContainer,
  NoResultsTitle,
  NoResultsSubtitle
} from './resultsStyles';

const NoResults = ({ searchValue }) => {
  return (
    <NoResultsContainer>
      <NoResultsTitle>No results found for "{searchValue}"</NoResultsTitle>
      <NoResultsSubtitle>
        Please make sure your words are spelled correctly or use less or
        different keywords.
      </NoResultsSubtitle>
    </NoResultsContainer>
  );
};

export default NoResults;
