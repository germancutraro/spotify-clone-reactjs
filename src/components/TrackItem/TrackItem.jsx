import React from 'react';
import moment from 'moment';
import Highlight from 'react-highlighter';
// styles
import { ItemContainer, ItemText } from './trackItemStyles';

const highlightStyle = { background: 'blue', color: '#fff' };

const TrackItem = ({ name, artists, album, added_at, duration_ms, query }) => (
  <>
    {name.toLowerCase().includes(query) ||
    artists[0].name.toLowerCase().includes(query) ||
    album.name.toLowerCase().includes(query) ? (
      <ItemContainer>
        {[name, artists[0].name, album.name].map(el => (
          <ItemText>
            <Highlight search={query} matchStyle={highlightStyle}>
              {el}
            </Highlight>
          </ItemText>
        ))}
        <ItemText>{moment(added_at).format('YYYY-MM-DD')}</ItemText>
        <ItemText>{moment(duration_ms).format('mm:ss')}</ItemText>
      </ItemContainer>
    ) : null}
  </>
);

export default React.memo(TrackItem);
