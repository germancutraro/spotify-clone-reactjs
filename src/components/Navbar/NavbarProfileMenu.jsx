import React from "react";
import {
  ProfileMenuContainer,
  ProfileMenuLink,
  ProfileMenuButton
} from "./navbarStyles";

const NavbarProfileMenu = ({ open }) => {
  return open ? (
    <ProfileMenuContainer>
      <ProfileMenuLink href="https://open.spotify.com" target="_blank">
        Cuenta
      </ProfileMenuLink>
      <ProfileMenuButton onClick={() => alert("cerrar sesión")}>
        Cerrar Sesión
      </ProfileMenuButton>
    </ProfileMenuContainer>
  ) : null;
};

export default NavbarProfileMenu;
