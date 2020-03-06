import styled, { css } from "styled-components";

/* containers */
export const NavContainer = styled.nav`
  height: 60px;
  padding: 0 2rem;
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 1000;
  transition: background-color 0.25s;
  opacity: 1;

  ::before,
  ::after {
    content: "";
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
    opacity: var(--opacity);
  }
`;

export const NavSubcontainer = styled.div`
  position: relative;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;

// wrappers
export const NavLeftWrapper = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;
export const NavRightWrapper = styled.div`
  display: flex;
  align-items: center;
`;

// left
export const ArrowsContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ArrowIconContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  width: 32px;
  border: 0;
  outline: 0;
  border-radius: 50%;
  background-color: #000000;
  margin-right: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  ${({ disabled }) =>
    disabled
      ? css`
          opacity: 0.6;
          cursor: not-allowed;
        `
      : null}
`;

// Right side

export const UpgradeButton = styled.a`
  background-color: transparent;
  border-radius: 100px;
  border: 2px solid #fff;
  padding: 0.5rem 2.125rem;
  margin-right: 2rem;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;
  line-height: 18px;

  &:hover {
    transform: scale(1.06);
  }
`;

export const UpgradeText = styled.p`
  -webkit-font-smoothing: antialiased;
  text-transform: uppercase;
  color: #fff;
  font-size: 12px;
  letter-spacing: 2.3px;
`;

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  align-self: center;
  position: relative;
  background-color: #282828;
  border-radius: 100px;
  padding: 0.25rem 0.5rem 0.25rem 0.25rem;
  cursor: pointer;
`;

export const Avatar = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 100%;
`;

export const Name = styled.p`
  color: #fff;
  font-weight: 500;
  font-size: 0.8rem;
  margin-left: 0.5rem;

  @media screen and (max-width: 992px) {
    display: none;
  }
`;

export const ArrowDownIconContainer = styled.div`
  display: flex;
  margin-left: 0.5rem;
  ${({ open }) =>
    open
      ? css`
          transform: rotateX(180deg);
        `
      : null}
`;

// prifile menu
export const ProfileMenuContainer = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 0.5rem;
  min-width: 160px;
  background-color: #282828;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.7);
  overflow: hidden;
  z-index: 1000;
`;

const ProfileMenuBtn = css`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0.7rem 1.25rem;
  color: #b3b3b3;
  text-decoration: none;
  background-color: transparent;
  border: 0;
  outline: 0;
  cursor: default;
  text-align: left;
  font-size: 14px;
  letter-spacing: 0.015rem;
  font-weight: 400;
  user-select: none;

  :hover {
    color: #fff;
    background-color: #333;
  }
`;

export const ProfileMenuLink = styled.a`
  ${ProfileMenuBtn}
  border-bottom:1px solid #404040
`;

export const ProfileMenuButton = styled.button`
  ${ProfileMenuBtn}
`;
