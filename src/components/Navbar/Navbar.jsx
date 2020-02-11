import React from 'react';
import Search from '../Search/Search';

import {
  NavContainer,
  NavRightWrapper,
  NavLeftWrapper,
  UpgradeButton,
  Avatar,
  UpgradeText,
  Name,
  Icon
} from './navbarStyles';
import { ReactComponent as ArrowDown } from '../../assets/icons/arrow_down.svg';

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
        <Name>Germán Cutraro</Name>
        <Icon>
          <ArrowDown />
        </Icon>
      </NavLeftWrapper>
    </NavContainer>
  );
};

export default Navbar;
