import React from 'react';
import PropTypes from 'prop-types';

const GenreItem = ({ name, cover }) => {
  return (
    <div>
      <p style={{ color: '#fff' }}>{name}</p>
      <img src={cover} alt='' />
    </div>
  );
};

GenreItem.propTypes = {
  name: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired
};

export default React.memo(GenreItem);
