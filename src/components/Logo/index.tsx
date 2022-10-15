import React from "react";
import styled from "styled-components";

import logo from "./../../assets/images/logo.png";

const LogoContainer = styled.div`
  width: 120px;
  height: 30px;
  background-image: url(${logo});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const Logo = () => {
  return <LogoContainer />;
};

export default Logo;
