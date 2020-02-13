import React from 'react';
// import moment from 'moment';
import Highlight from 'react-highlighter';
// styles
import { ItemContainer, ItemText } from './trackItemStyles';

const highlightStyle = { background: 'blue', color: '#fff' };

const TrackItem = ({ name, artists, album, query }) => (
  <>
    {name.toLowerCase().includes(query) ||
    artists[0].name.toLowerCase().includes(query) ||
    album.name.toLowerCase().includes(query) ? (
      <ItemContainer>
        {[name, artists[0].name, album.name].map((el, i) => (
          <ItemText key={i}>
            <Highlight search={query} matchStyle={highlightStyle}>
              {el}
            </Highlight>
          </ItemText>
        ))}
      </ItemContainer>
    ) : null}
  </>
);

export default React.memo(TrackItem);
