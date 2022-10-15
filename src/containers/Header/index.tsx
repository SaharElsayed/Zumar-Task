import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";

import DropDown from "../../components/DropDown";
import NavMenu from "../../components/NavMenu";
import Search from "../../components/Search";
import Logo from "../../components/Logo";

import {
  HeaderContainer,
  FlexContainer,
  CartContainer,
  CartBagde
} from "./styles";

const Header = () => {
  const options = [
    {
      id: 0,
      value: "all",
      text: "All"
    },
    {
      id: 1,
      value: "iphone",
      text: "Iphone"
    },
    {
      id: 2,
      value: "mac",
      text: "Mac"
    }
  ];

  return (
    <HeaderContainer>
      <Logo />
      <FlexContainer>
        <DropDown options={options} />
        <Search />
      </FlexContainer>
      <FlexContainer>
        <NavMenu />
        <CartContainer>
          <CartBagde>
            <p>2</p>
          </CartBagde>
          <FontAwesomeIcon icon={faShoppingBag} size="sm" />
        </CartContainer>
      </FlexContainer>
    </HeaderContainer>
  );
};

export default Header;
