import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingBag,
  faBars
} from "@fortawesome/free-solid-svg-icons";

import DropDown from "../../components/DropDown";
import NavMenu from "../../components/NavMenu";
import Search from "../../components/Search";
import Logo from "../../components/Logo";

import {
  HeaderContainer,
  FlexContainer,
  CartContainer,
  CartBagde,
  SearchFilterContainer,
  MobileMenu
} from "./styles";
import MobileNavMenu from "../../components/MobileNavMenu";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
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

  const toggleMobileMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <HeaderContainer>
        <Logo />

        <SearchFilterContainer>
          <DropDown options={options} />
          <Search />
        </SearchFilterContainer>

        <FlexContainer>
          <NavMenu />
          <CartContainer>
            <CartBagde>
              <p>2</p>
            </CartBagde>
            <FontAwesomeIcon icon={faShoppingBag} size="sm" />
          </CartContainer>
          <MobileMenu>
            <FontAwesomeIcon
              onClick={toggleMobileMenu}
              icon={faBars}
              size="lg"
            />
            {showMenu && <MobileNavMenu />}
          </MobileMenu>
        </FlexContainer>
      </HeaderContainer>
    </>
  );
};

export default Header;
