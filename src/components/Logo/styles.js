import styled from "styled-components";
import logo from "./../../assets/images/logo.png";

export const LogoContainer = styled.div`
  width: 120px;
  height: 30px;
  background-image: url(${logo});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
`;
