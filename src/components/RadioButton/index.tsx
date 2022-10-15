import React from "react";
import { Wrapper, RadioInput, RadioLabel } from "./styles";

const RadioButton = ({
  id,
  name,
  changeHandler,
  checkedItem,
  value,
  children
}: {
  id: string;
  name: string;
  changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  checkedItem: number;
  value: string | number;
  children: React.ReactNode;
}) => {
  return (
    <Wrapper>
      <RadioInput
        type="radio"
        id={id}
        name={name}
        onChange={changeHandler}
        value={value}
        checked={checkedItem == value}
      />
      <RadioLabel className="label" htmlFor={id}>
        {children}
      </RadioLabel>
    </Wrapper>
  );
};

export default RadioButton;
