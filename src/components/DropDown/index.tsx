import React from "react";
import styled from "styled-components";

const SelectMenu = styled.select`
  border: none;
  font-size: 16px;
  &:focus {
    outline: none;
  }
`;

const DropDown = ({
  options
}: {
  options: {
    id: number;
    value: string;
    text: string;
  }[];
}) => {
  return (
    <SelectMenu id="categories" name="categories">
      {options.map((option) => (
        <option key={option.id} value={option.value}>
          {option.text}
        </option>
      ))}
    </SelectMenu>
  );
};

export default DropDown;
