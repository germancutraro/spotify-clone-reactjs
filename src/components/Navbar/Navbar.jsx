import React, { useState } from 'react';
import SearchInput from '../SearchInput/SearchInput';
import { useSelector } from 'react-redux';
import {
  NavContainer,
  NavRightWrapper,
  NavLeftWrapper,
  UpgradeButton,
  Avatar,
  UpgradeText,
  Name,
  ArrowDownIconContainer,
  NavSubcontainer,
  ArrowsContainer,
  ArrowIconContainer,
  UserContainer
} from './navbarStyles';
import { ReactComponent as ArrowDown } from '../../assets/icons/down-arrow.svg';
import { ReactComponent as ArrowLeft } from '../../assets/icons/arrow-left.svg';
import { ReactComponent as ArrowRight } from '../../assets/icons/arrow-right.svg';
import { useLocation, useHistory } from 'react-router-dom';
import NavbarProfileMenu from './NavbarProfileMenu';
import LibraryMenu from '../LibraryMenu/LibraryMenu';

const Navbar = () => {
  const { images, display_name } = useSelector(({ auth }) => auth.user);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const history = useHistory();

  return (
    <NavContainer>
      <NavSubcontainer>
        <NavLeftWrapper>
          <ArrowsContainer>
            <ArrowIconContainer onClick={() => history.goBack()}>
              <ArrowLeft fill='#fff' width={22} height={22} />
            </ArrowIconContainer>
            <ArrowIconContainer onClick={() => history.goForward()}>
              <ArrowRight fill='#fff' width={22} height={22} />
            </ArrowIconContainer>
          </ArrowsContainer>
          {pathname === '/app/search' && <SearchInput />}
          {[
            '/app/collection/playlists',
            '/app/collection/albums',
            '/app/collection/artists'
          ].includes(pathname) && <LibraryMenu />}
        </NavLeftWrapper>
        <NavRightWrapper>
          <UpgradeButton
            href='https://www.spotify.com/premium'
            target='_blank'
            rel='noopener noreferrer'
            title='Upgrade to Premium'
          >
            <UpgradeText>upgrade</UpgradeText>
          </UpgradeButton>

          <UserContainer onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {images && <Avatar src={images[0].url} />}
            <Name>{display_name}</Name>
            <ArrowDownIconContainer open={isMenuOpen}>
              <ArrowDown fill='#fff' width={10} height={10} />
            </ArrowDownIconContainer>
            <NavbarProfileMenu open={isMenuOpen} />
          </UserContainer>
        </NavRightWrapper>
      </NavSubcontainer>
    </NavContainer>
  );
};

export default Navbar;
