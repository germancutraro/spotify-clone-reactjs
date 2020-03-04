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
  Duration
} from "./trackItemStyles";

import { ReactComponent as PlayIcon } from "../../assets/icons/play.svg";
import { ReactComponent as MusicIcon } from "../../assets/icons/music.svg";
import moment from "moment";

const TrackItem = ({ name, artists, album, duration_ms }) => {
  return (
    <ItemContainer>
      <MusicIconContainer>
        <PlayIcon height="20" width="20" fill="#FFF" />
        <MusicIcon height="20" width="20" fill="#FFF" />
      </MusicIconContainer>

      <TextContainer>
        <Name>{name}</Name>
        <SubTextsContainer>
          {artists.map((artist, i) => (
            <Artist key={i}>{artist.name}</Artist>
          ))}

          <Album>{album.name}</Album>
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
