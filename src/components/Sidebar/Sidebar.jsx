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
import Playlists from '../../containers/Playlists/Playlists';

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
          <Playlists />
        </PlaylistContainer>
      </ScrollContainer>
    </SideContainer>
  );
};

export default Sidebar;
