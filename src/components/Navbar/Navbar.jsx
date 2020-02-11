import React from 'react';
import {
  NavContainer,
  NavRightWrapper,
  NavLeftWrapper,
  UpgradeButton,
  Avatar,
  UpgradeText
} from './navbarStyles';
import Search from '../Search/Search';

const Navbar = () => {
  return (
    <NavContainer>
      <NavRightWrapper>
        <Search />
      </NavRightWrapper>
      <NavLeftWrapper>
        <UpgradeButton>
          <UpgradeText>upgrade</UpgradeText>
        </UpgradeButton>
        <Avatar src='https://profile-images.scdn.co/images/userprofile/default/e3a22d031a8b9245d40fe20860461a21d68a198b' />
      </NavLeftWrapper>
    </NavContainer>
  );
};

export default Navbar;
