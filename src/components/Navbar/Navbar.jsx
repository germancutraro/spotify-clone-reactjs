import React from 'react';
import Search from '../Search/Search';
import { useSelector } from 'react-redux';
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
  const { images, display_name } = useSelector(({ auth }) => auth.user);
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
        <Avatar src={images[0].url} />
        <Name>{display_name}</Name>
        <Icon>
          <ArrowDown fill='#fff' width={16} height={16} />
        </Icon>
      </NavLeftWrapper>
    </NavContainer>
  );
};

export default Navbar;
