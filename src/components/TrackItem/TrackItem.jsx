import React from 'react';
import moment from 'moment';
import Highlight from 'react-highlighter';

const TrackItem = ({ name, artists, album, added_at, duration_ms, query }) => (
  <>
    {name.toLowerCase().includes(query) ||
    artists[0].name.toLowerCase().includes(query) ||
    album.name.toLowerCase().includes(query) ? (
      <tr>
        <td style={{ fontSize: '.7rem', textAlign: 'center' }}>
          <Highlight
            search={query}
            matchStyle={{ background: 'blue', color: '#fff' }}
          >
            {name}
          </Highlight>
        </td>
        <td style={{ fontSize: '.7rem', textAlign: 'center' }}>
          <Highlight
            search={query}
            matchStyle={{ background: 'blue', color: '#fff' }}
          >
            {artists[0].name}
          </Highlight>
        </td>
        <td style={{ fontSize: '.7rem', textAlign: 'center' }}>
          <Highlight
            search={query}
            matchStyle={{ background: 'blue', color: '#fff' }}
          >
            {album.name}
          </Highlight>
        </td>

        <td style={{ fontSize: '.7rem', textAlign: 'center' }}>
          {moment(added_at).format('YYYY-MM-DD')}
        </td>

        <td style={{ fontSize: '.7rem', textAlign: 'center' }}>
          {moment(duration_ms).format('mm:ss')}
        </td>
      </tr>
    ) : null}
  </>
);

export default React.memo(TrackItem);
