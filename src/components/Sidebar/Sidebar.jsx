import React from 'react';
import {
  SideContainer,
  Items,
  Item,
  ItemText,
  LibraryContainer,
  ItemsTitle,
  ScrollContainer,
  PlaylistContainer
} from './sidebarStyles';

const Sidebar = () => {
  return (
    <SideContainer>
      <Items>
        <Item>
          {/* <MaterialIcon icon='home' color={colorPalette.grey._50} /> */}
          <ItemText>Home</ItemText>
        </Item>
        <Item>
          {/* <MaterialIcon icon='headset' color={colorPalette.grey._50} /> */}
          <ItemText>Browse</ItemText>
        </Item>
        <Item>
          {/* <MaterialIcon icon='radio' color={colorPalette.grey._50} /> */}
          <ItemText>Radio</ItemText>
        </Item>
      </Items>

      <ScrollContainer>
        <LibraryContainer>
          <ItemsTitle>YOUR LIBRARY</ItemsTitle>
          <Item>
            <ItemText>Made For You</ItemText>
          </Item>
          <Item>
            <ItemText>Recently Played</ItemText>
          </Item>
          <Item>
            <ItemText>Liked Songs</ItemText>
          </Item>
          <Item>
            <ItemText>Albums</ItemText>
          </Item>
          <Item>
            <ItemText>Artists</ItemText>
          </Item>
          <Item>
            <ItemText>Podcasts</ItemText>
          </Item>
        </LibraryContainer>

        <PlaylistContainer>
          <ItemsTitle>PLAYLIST</ItemsTitle>
          <Item>
            <ItemText light>Novedades Viernes Argentina</ItemText>
          </Item>
          <Item>
            <ItemText light>This is Imagine Dragons</ItemText>
          </Item>
          <Item>
            <ItemText light>No Te Va A Gustar</ItemText>
          </Item>
          <Item>
            <ItemText light>Iconos del Rock Argentino</ItemText>
          </Item>
          <Item>
            <ItemText light>This is: Gustavo Cerati</ItemText>
          </Item>
          <Item>
            <ItemText light>This is Pink Floyd</ItemText>
          </Item>
          <Item>
            <ItemText light>This is Coldplay</ItemText>
          </Item>
          <Item>
            <ItemText light>POP en Inglės 2020</ItemText>
          </Item>
          <Item>
            <ItemText light>Rock Argentino</ItemText>
          </Item>
          <Item>
            <ItemText light>This is Gun's And Roses</ItemText>
          </Item>
          <Item>
            <ItemText light>This is Arctic Monkeys</ItemText>
          </Item>
        </PlaylistContainer>
      </ScrollContainer>
    </SideContainer>
  );
};

export default Sidebar;
