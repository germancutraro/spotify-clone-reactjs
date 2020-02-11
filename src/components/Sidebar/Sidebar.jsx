import React from 'react';
import { SideContainer, Items, Item, ItemText } from './sidebarStyles';

const Sidebar = () => {
  return (
    <SideContainer>
      <Items>
        <Item>
          {/* <MaterialIcon icon='home' color={colorPalette.grey._50} /> */}
          <ItemText>Home</ItemText>
        </Item>
        <Item>
          {/* <MaterialIcon icon='headset' color={colorPalette.grey._50} /> */}
          <ItemText>Browse</ItemText>
        </Item>
        <Item>
          {/* <MaterialIcon icon='radio' color={colorPalette.grey._50} /> */}
          <ItemText>Radio</ItemText>
        </Item>
      </Items>
    </SideContainer>
  );
};

export default Sidebar;
