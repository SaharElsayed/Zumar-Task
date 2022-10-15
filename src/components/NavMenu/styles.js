import styled from "styled-components";

export const Ul = styled.ul`
  list-style: none;
`;

export const Li = styled.li`
  display: inline-block;
  padding: 0 15px;
  font-family: "Poppins-SemiBold";
  color: ${(props) => props.theme.black};
  cursor: pointer;
`;
