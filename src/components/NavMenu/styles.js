import styled from "styled-components";

export const Ul = styled.ul`
  list-style: none;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const Li = styled.li`
  display: inline-block;
  padding: 0 15px;
  font-family: "Poppins-SemiBold";
  color: ${(props) => props.theme.black};
  cursor: pointer;
`;
