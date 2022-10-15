import React from "react";
import IncrementDecrementButton from "../../../../components/IncrementDecrementButton";
import {
  SectionWrapper,
  HeaderWrapper,
  Header,
  ActionWrapper,
  Price,
  Pieces
} from "./styles";

const Quantity = ({
  initialPrice,
  quantity,
  changeQuantity
}: {
  initialPrice: number;
  quantity: number;
  changeQuantity: (q: number) => void;
}) => {
  const handleIncrement = () => {
    changeQuantity(quantity + 1);
  };
  const handleDecrement = () => {
    changeQuantity(quantity === 1 ? 1 : quantity - 1);
  };

  return (
    <SectionWrapper>
      <HeaderWrapper>
        <Header>Quantity</Header>
        <Price>${initialPrice}</Price>
      </HeaderWrapper>
      <ActionWrapper>
        <IncrementDecrementButton
          handleIncrement={handleIncrement}
          handleDecrement={handleDecrement}
        ></IncrementDecrementButton>
        <Pieces>{quantity} Pieces</Pieces>
      </ActionWrapper>
    </SectionWrapper>
  );
};

export default Quantity;
