import React from "react";
import { MenuOverlay, MenuWrapper, Ul, Li } from "./styles";

const MobileNavMenu = () => {
  const menuItems = [
    {
      id: 1,
      text: "Services"
    },
    {
      id: 2,
      text: "Orders"
    },
    {
      id: 3,
      text: "Account"
    }
  ];
  return (
    <MenuOverlay>
      <MenuWrapper>
        <Ul>
          {menuItems.map((item) => (
            <Li key={item.id}>{item.text}</Li>
          ))}
        </Ul>
      </MenuWrapper>
    </MenuOverlay>
  );
};

export default MobileNavMenu;
