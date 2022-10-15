import styled from "styled-components";

export const MenuOverlay = styled.div`
  width: fit-content;
  background-color: #16181c;
  z-index: 4;
  overflow: hidden;
  position: absolute;
  right: 0;
  border-radius: 5px;
  @media (min-width: 769px) {
    display: none;
  }
`;

export const MenuWrapper = styled.div`
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  padding: 20px 40px;
  z-index: 5;
  -webkit-transition: background-color 0.4s ease-out;
  transition: background-color 0.4s ease-out;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Ul = styled.ul`
  list-style: none;
  padding: 0;
`;

export const Li = styled.li`
  padding: 10px;
  font-family: "Poppins-SemiBold";
  color: ${(props) => props.theme.white};
  cursor: pointer;
`;
