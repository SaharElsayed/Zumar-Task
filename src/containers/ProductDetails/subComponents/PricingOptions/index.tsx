import React from "react";
import { SectionContainer, NumberOfPieces, Price } from "./styles";

const PricingOptions = ({
  options
}: {
  options: {
    quantity: string;
    price: string;
  }[];
}) => {
  return (
    <SectionContainer>
      {options.map((option, index) => (
        <div key={`option-${index}`}>
          <NumberOfPieces>{`${option.quantity} Pieces`}</NumberOfPieces>
          <Price>{option.price}</Price>
        </div>
      ))}
    </SectionContainer>
  );
};

export default PricingOptions;
