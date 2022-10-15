import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.lightGrey};
  border-radius: 60px;
  width: fit-content;
  gap: 10px;
`;

export const Button = styled.button`
  border: none;
  padding: 12px 15px;
  cursor: pointer;
  border-radius: 60px;
`;
