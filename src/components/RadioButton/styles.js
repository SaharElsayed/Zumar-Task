import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  margin: 0 10px;
`;

export const RadioInput = styled.input`
  appearance: none;
  display: none;
  &:checked {
    + .label {
      background-color: ${(props) => props.theme.lightGrey};
    }
  }
`;

export const RadioLabel = styled.label`
  display: inline-block;
  cursor: pointer;
  text-align: center;
  border-radius: 10px;
  padding: 10px;
  width: 100%;
`;
