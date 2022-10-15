import React from "react";
import { PrimaryButton, SecondaryButton } from "./styles";

const Button = ({
  text,
  color,
  children,
  action
}: {
  text?: string;
  color: "primary" | "secondary";
  children?: React.ReactNode;
  action: () => void;
}) => {
  const renderButtonBasedOnColor = (
    color: "primary" | "secondary"
  ) => {
    switch (color) {
      case "primary":
        return (
          <PrimaryButton onClick={action}>
            {text}
            {children}
          </PrimaryButton>
        );
      case "secondary":
        return (
          <SecondaryButton onClick={action}>
            {text}
            {children}
          </SecondaryButton>
        );
    }
  };

  return <>{renderButtonBasedOnColor(color)}</>;
};

export default Button;
