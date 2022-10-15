import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import Button from "../../../../components/Button";
import {
  SectionWrapper,
  HeaderWrapper,
  Header,
  Price,
  ActionWrapper,
  ButtonContent,
  Hint
} from "./styles";

const OrderAction = () => {
  const handleOrderNow = () => {
    console.log("order Now");
  };

  const handleCallUs = () => {
    console.log("Call Us");
  };

  return (
    <SectionWrapper>
      <HeaderWrapper>
        <Header>Total</Header>
        <Price>$12,100</Price>
      </HeaderWrapper>

      <ActionWrapper>
        <Button
          text="Place order now"
          color="primary"
          action={handleOrderNow}
        />

        <Button color="secondary" action={handleCallUs}>
          <ButtonContent>
            <FontAwesomeIcon icon={faPhone} size="lg" />
            Call Us
          </ButtonContent>
        </Button>

        <Hint>We are 24/7 available</Hint>
      </ActionWrapper>
    </SectionWrapper>
  );
};

export default OrderAction;
