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
import { ReactComponent as HomeSolid } from '../../assets/icons/home-solid.svg';
// styles
import {
  SideContainer,
  SpotifyLogo,
  NavItemsContainer,
  Item,
  ItemText,
  ItemLink,
  LibraryContainer,
  IconSquare,
  SectionTitle,
  LibraryItem,
  ScrollContainer,
  PlaylistContainer,
  InstallItem
} from './sidebarStyles';
import { useLocation } from 'react-router-dom';

const Sidebar = () => {
  const { pathname } = useLocation();

  console.log(pathname)
  return (
    <SideContainer>
      <SpotifyLogo src={SpotifyWhite} alt='spotify logo' />
      <NavItemsContainer>
        <Item>
          <ItemLink exact to='/app'>
            {pathname === '/app' ? (
              <HomeSolid fill='#fff' width={23} height={23} />
            ) : (
              <HomeOutline fill='#a8a8a8' width={23} height={23} />
            )}
            <ItemText>Home</ItemText>
          </ItemLink>
        </Item>
        <Item>
          <ItemLink to='/app/search'>
            <Search fill='#a8a8a8' width={23} height={23} />
            <ItemText>Search</ItemText>
          </ItemLink>
        </Item>
        <Item>
          <ItemLink to='/app/collection/playlists'>
            <LibraryIcon fill='#a8a8a8' width={23} height={23} />
            <ItemText>Your Library</ItemText>
          </ItemLink>
        </Item>
      </NavItemsContainer>

      <LibraryContainer>
        <SectionTitle>PLAYLISTS</SectionTitle>
        <LibraryItem>
          <Item svgTransition={false}>
            <IconSquare>
              <PlusIcon fill='#333' width={23} height={23} />
            </IconSquare>
            <ItemText>Create Playlist</ItemText>
          </Item>
        </LibraryItem>
        <LibraryItem gradient>
          <Item svgTransition={false}>
            <IconSquare gradient>
              <HeartIcon fill='#fff' width={16} height={16} />
            </IconSquare>
            <ItemText>Liked Songs</ItemText>
          </Item>
        </LibraryItem>
      </LibraryContainer>
      <PlaylistContainer>
        <ScrollContainer>
          <Playlists />
        </ScrollContainer>
      </PlaylistContainer>

      <InstallItem>
        <DownloadIcon fill='#a8a8a8' width={20} height={20} />
        <ItemText>Install App</ItemText>
      </InstallItem>

      {/* <SpotifyLogo src={SpotifyWhite} alt='' width={131} height={40} />
      <NavItemsContainer>
        <Item>
          <Link to='/app'>
            {pathname === '/app' ? (
              <HomeSolid fill='#fff' width={23} height={23} />
            ) : (
              <HomeOutline fill='#a8a8a8' width={23} height={23} />
            )}
            Home
          </Link>
        </Item>
        <Item>
          <Link to='/search'>
            <Search fill='#a8a8a8' width={23} height={23} />
            Search
          </Link>
        </Item>
        <Item>
          <Link to='/library'>
            <LibraryIcon fill='#a8a8a8' width={23} height={23} />
            Your Library
          </Link>
        </Item>
      </NavItemsContainer>

      <LibraryContainer>
        <SectionTitle>PLAYLISTS</SectionTitle>
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
      </Item> */}
    </SideContainer>
  );
};

export default Sidebar;
