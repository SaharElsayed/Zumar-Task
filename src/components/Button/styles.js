import styled from "styled-components";

export const CustomButton = styled.button`
  color: ${(props) => props.theme.white};
  font-size: 14px;
  padding: 10px 20px;
  border-radius: 10px;
  font-family: "Poppins-SemiBold";
  cursor: pointer;
`;

export const PrimaryButton = styled(CustomButton)`
  border: 2px solid ${(props) => props.theme.primary};
  background-color: ${(props) => props.theme.primary};
`;

export const SecondaryButton = styled(CustomButton)`
  border: 2px solid ${(props) => props.theme.secondary};
  background-color: ${(props) => props.theme.secondary};
`;
