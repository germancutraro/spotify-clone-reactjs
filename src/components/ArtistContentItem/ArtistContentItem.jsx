import React from 'react';
import {
  ItemContainer,
  ImageContainer,
  Image,
  Title,
  PlayIconContainer
} from './artistContentItemStyles';

import { ReactComponent as PlayIcon } from '../../assets/icons/play.svg';
import { useHistory } from 'react-router-dom';

const ArtistContentItem = ({ albums }) => {
  const history = useHistory();

  const handleChangeRoute = id => {
    history.push(`/app/album/${id}`);
  };

  return albums.map((album, i) => (
    <ItemContainer key={i} onClick={() => handleChangeRoute(album.id)}>
      <ImageContainer>
        <Image src={album.images[0].url} />
        <PlayIconContainer
          data-value='play'
          onClick={e => {
            e.stopPropagation();
            alert('play');
          }}
        >
          <PlayIcon width='40' fill='#fff' />
        </PlayIconContainer>
      </ImageContainer>
      <Title>{album.name}</Title>
    </ItemContainer>
  ));
};

export default React.memo(ArtistContentItem);
