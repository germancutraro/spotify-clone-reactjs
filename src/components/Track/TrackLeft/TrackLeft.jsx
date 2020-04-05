import React from 'react';
import {
  PlayerLeft,
  SongImage,
  SongTextContainer,
  SongName,
  SongNameText,
  SongArtist,
} from './trackLeftStyles';

const TrackLeft = ({ song, handleChangeRoute }) => {
  return (
    <PlayerLeft>
      <SongImage
        src={song.cover}
        alt={song.cover}
        hasAlbum={song?.album?.id}
        onClick={() =>
          song?.album?.id ? handleChangeRoute(`album/${song?.album?.id}`) : null
        }
      />

      <SongTextContainer>
        {song?.album?.id ? (
          <SongName to={`/app/album/${song?.album?.id}`}>{song?.name}</SongName>
        ) : (
          <SongNameText>{song?.name}</SongNameText>
        )}
        <SongArtist
          to={song?.artists ? `/app/artist/${song?.artists[0].id}` : ' '}
        >
          {song?.artists && song?.artists[0].name}
        </SongArtist>
      </SongTextContainer>
    </PlayerLeft>
  );
};

export default TrackLeft;
