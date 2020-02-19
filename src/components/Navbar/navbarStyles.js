import styled from 'styled-components';

export const NavContainer = styled.nav`
  grid-area: nav;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 55px;
  background-color: #121212;
  width: 100%;
`;

export const Avatar = styled.img`
  width: 33px;
  height: 33px;
  border-radius: 100%;
`;

export const Name = styled.p`
  color: #fff;
  font-weight: 500;
  font-size: 0.8rem;
  padding: 0.6rem;
`;

export const UpgradeLink = styled.a``;

export const UpgradeButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  width: 140px;
  height: 36px;
  border-radius: 100px;
  border: 1px solid #fff;
  margin: 1rem;

  &:hover {
    transform: scale(1.05);
  }
`;

export const UpgradeText = styled.p`
  font-family: 'Circular-Sp', sans-serif;
  text-transform: uppercase;
  color: #fff;
  font-size: 12px;
  letter-spacing: 2.3px;
`;

export const NavLeftWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
`;

export const NavRightWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Icon = styled.div`
  padding: 1rem;
`;
