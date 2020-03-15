import React from 'react';

const NoResults = ({ searchValue }) => {
  return (
    <div style={{ color: '#fff' }}>
      <h2>No results found for "{searchValue}"</h2>
      <small>
        Please make sure your words are spelled correctly or use less or
        different keywords.
      </small>
    </div>
  );
};

export default NoResults;
