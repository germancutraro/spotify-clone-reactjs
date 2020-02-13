import React from 'react';
import Playlists from '../../containers/Playlists/Playlists';
import SpotifyWhite from '../../assets/images/spotify.png';
// Icons
import { ReactComponent as DownloadIcon } from '../../assets/icons/download.svg';
import { ReactComponent as HomeOutline } from '../../assets/icons/home-outline.svg';
import { ReactComponent as Search } from '../../assets/icons/search.svg';
import { ReactComponent as LibraryIcon } from '../../assets/icons/library.svg';
import { ReactComponent as PlusIcon } from '../../assets/icons/plus.svg';
import { ReactComponent as HeartIcon } from '../../assets/icons/heart.svg';
// styles
import {
  SideContainer,
  SpotifyLogo,
  Items,
  Item,
  ItemText,
  LibraryContainer,
  IconSquare,
  ItemsTitle,
  ScrollContainer,
  PlaylistContainer
} from './sidebarStyles';

const Sidebar = () => {
  return (
    <SideContainer>
      <SpotifyLogo src={SpotifyWhite} alt='' width={131} height={40} />
      <Items>
        <Item>
          <HomeOutline fill='#a8a8a8' width={23} height={23} />
          <ItemText>Home</ItemText>
        </Item>
        <Item>
          <Search fill='#a8a8a8' width={23} height={23} />
          <ItemText>Search</ItemText>
        </Item>
        <Item>
          <LibraryIcon fill='#a8a8a8' width={23} height={23} />
          <ItemText>Your Library</ItemText>
        </Item>
      </Items>

      <LibraryContainer>
        <ItemsTitle>PLAYLISTS</ItemsTitle>
        <Item>
          <IconSquare>
            <PlusIcon fill='#333' width={23} height={23} />
          </IconSquare>
          <ItemText>Create Playlist</ItemText>
        </Item>
        <Item>
          <IconSquare gradient>
            <HeartIcon fill='#fff' width={16} height={16} />
          </IconSquare>
          <ItemText>Liked Songs</ItemText>
        </Item>
      </LibraryContainer>

      <PlaylistContainer>
        <ScrollContainer>
          <Playlists />
        </ScrollContainer>
      </PlaylistContainer>

      <Item>
        <DownloadIcon fill='#a8a8a8' width={20} height={20} />
        <ItemText>Install App</ItemText>
      </Item>
    </SideContainer>
  );
};

export default Sidebar;
