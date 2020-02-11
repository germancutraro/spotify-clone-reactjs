import React from 'react';
import Highlight from 'react-highlighter';

const TrackItem = ({ name, artists, album, query }) => {
  return (
    <>
      {name.toLowerCase().includes(query) ||
      artists[0].name.toLowerCase().includes(query) ||
      album.name.toLowerCase().includes(query) ? (
        <tr>
          <td style={{ fontSize: '.7rem' }}>
            <Highlight
              search={query}
              matchStyle={{ background: 'blue', color: '#fff' }}
            >
              {name}
            </Highlight>
          </td>
          <td style={{ fontSize: '.7rem' }}>
            <Highlight
              search={query}
              matchStyle={{ background: 'blue', color: '#fff' }}
            >
              {artists[0].name}
            </Highlight>
          </td>
          <td style={{ fontSize: '.7rem' }}>
            <Highlight
              search={query}
              matchStyle={{ background: 'blue', color: '#fff' }}
            >
              {album.name}
            </Highlight>
          </td>
        </tr>
      ) : null}
    </>
  );
};

export default React.memo(TrackItem);
