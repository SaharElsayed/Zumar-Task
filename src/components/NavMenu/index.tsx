import React from "react";
import { Ul, Li } from "./styles";

const NavMenu = () => {
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
    <Ul>
      {menuItems.map((item) => (
        <Li key={item.id}>{item.text}</Li>
      ))}
    </Ul>
  );
};

export default NavMenu;
