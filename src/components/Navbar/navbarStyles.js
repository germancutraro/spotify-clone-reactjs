import styled from 'styled-components';

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: 80px;
  background-color: #000;
`;

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 100%;
`;

export const Name = styled.p`
  color: #fff;
  font-weight: 500;
  font-size: 0.9rem;
  padding: 0.6rem;
`;

export const UpgradeButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 115px;
  height: 28px;
  border-radius: 10px;
  border: 1px solid #fff;
  margin: 1rem;
`;

export const UpgradeText = styled.p`
  text-transform: uppercase;
  color: #fff;
  font-size: 10.8px;
  font-weight: 700;
  letter-spacing: 2px;
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
