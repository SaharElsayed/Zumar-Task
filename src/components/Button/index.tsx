import React from "react";
import styled from "styled-components";

const CustomButton = styled.button`
  background: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.white};
  font-size: 14px;
  padding: 10px 20px;
  border: 2px solid ${(props) => props.theme.primary};
  border-radius: 10px;
  font-family: "Poppins-SemiBold";
`;

const Button = () => {
  return (
    <CustomButton>Custom Button with Styled Component</CustomButton>
  );
};

export default Button;
