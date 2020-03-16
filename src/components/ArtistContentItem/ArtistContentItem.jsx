import React from 'react';
import LibraryItem from '../LibraryItem/LibraryItem';
import {
  ItemContainer,
  ImageContainer,
  Image,
  Title
} from './artistContentItemStyles';

const ArtistContentItem = ({ albums }) => {
  return albums.map(album => (
    // <LibraryItem
    //   key={album.id}
    //   id={album.id}
    //   title={album.name}
    //   subtitle={album.artists[0].name}
    //   cover={album.images[0].url}
    // />
    <ItemContainer>
      <ImageContainer>
        <Image src={album.images[0].url} />
      </ImageContainer>
      <Title>{album.name}</Title>
    </ItemContainer>
  ));
};

export default React.memo(ArtistContentItem);
