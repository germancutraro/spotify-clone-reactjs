import React from "react";
// styles
import {
  ItemContainer,
  MusicIconContainer,
  TextContainer,
  Name,
  SubTextsContainer,
  Artist,
  Album,
  DurationContainer,
  Duration,
  Separator,
  ArtistContainer,
  ArtistSeparator,
  ArtistsContainer,
  AlbumContainer
} from "./trackItemStyles";

import { ReactComponent as PlayIcon } from "../../assets/icons/play.svg";
import { ReactComponent as MusicIcon } from "../../assets/icons/music.svg";
import moment from "moment";

const TrackItem = ({ name, artists, album, duration_ms }) => {
  return (
    <ItemContainer>
      <MusicIconContainer>
        <MusicIcon height="20" width="18" fill="rgba(255, 255, 255, .6)" />
        <PlayIcon height="22" width="22" fill="rgba(255, 255, 255, 1)" />
      </MusicIconContainer>

      <TextContainer>
        <Name>{name}</Name>
        <SubTextsContainer>
          <ArtistsContainer>
            {artists.map((artist, i) => (
              <ArtistContainer key={i}>
                <Artist>{artist.name}</Artist>
                {i + 1 !== artists.length ? (
                  <ArtistSeparator>,</ArtistSeparator>
                ) : null}
              </ArtistContainer>
            ))}
          </ArtistsContainer>
          <Separator>•</Separator>

          <AlbumContainer>
            <Album>{album.name}</Album>
          </AlbumContainer>
        </SubTextsContainer>
      </TextContainer>
      <DurationContainer>
        <Duration>
          {`${moment.duration(duration_ms)._data.minutes}:${
            moment.duration(duration_ms)._data.seconds > 9
              ? moment.duration(duration_ms)._data.seconds
              : `0${moment.duration(duration_ms)._data.seconds}`
          }`}
        </Duration>
      </DurationContainer>
    </ItemContainer>
  );
};

export default React.memo(TrackItem);
