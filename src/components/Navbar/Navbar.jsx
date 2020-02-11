import React from 'react';
import Search from '../Search/Search';

import {
  NavContainer,
  NavRightWrapper,
  NavLeftWrapper,
  UpgradeLink,
  UpgradeButton,
  Avatar,
  UpgradeText,
  Name,
  Icon
} from './navbarStyles';
import { ReactComponent as ArrowDown } from '../../assets/icons/down-arrow.svg';

const Navbar = () => {
  return (
    <NavContainer>
      <NavRightWrapper>
        <Search />
      </NavRightWrapper>
      <NavLeftWrapper>
        <UpgradeLink
          href='https://www.spotify.com/premium'
          target='_blank'
          rel='noopener noreferrer'
          title='Upgrade to Premium'
        >
          <UpgradeButton>
            <UpgradeText>upgrade</UpgradeText>
          </UpgradeButton>
        </UpgradeLink>
        <Avatar src='https://profile-images.scdn.co/images/userprofile/default/e3a22d031a8b9245d40fe20860461a21d68a198b' />
        <Name>Germán Cutraro</Name>
        <Icon>
          <ArrowDown fill='#fff' width={16} height={16} />
        </Icon>
      </NavLeftWrapper>
    </NavContainer>
  );
};

export default Navbar;
