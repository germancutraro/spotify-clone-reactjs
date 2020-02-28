import styled from 'styled-components';

export const NavContainer = styled.nav`
  --color: red;
  height: 60px;
  padding: 0 2rem;
  width: 100%;
  position: sticky;
  top: 0;
  transition: background-color 0.25s;
  opacity: 1;

  ::before,
  ::after {
    content: '';
    position: fixed;
    height: 60px; /* nav height */
    top: 0;
    left: 230px; /* sidebar width */
    right: 0;
    background-color: var(--color);
    z-index: 0;
    opacity: var(--opacity);
  }

  ::after {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

export const NavSubcontainer = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
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
  padding: 0 1rem;
`;

export const NavRightWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: red;
`;

export const Icon = styled.div`
  padding: 1rem;
`;
