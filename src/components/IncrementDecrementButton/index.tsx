import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { Wrapper, Button } from "./styles";

const IncrementDecrementButton = ({
  handleIncrement,
  handleDecrement
}: {
  handleIncrement: () => void;
  handleDecrement: () => void;
}) => {
  return (
    <Wrapper>
      <Button onClick={handleDecrement}>
        <FontAwesomeIcon icon={faMinus} size="lg" />
      </Button>
      <Button onClick={handleIncrement}>
        <FontAwesomeIcon icon={faPlus} size="lg" />
      </Button>
    </Wrapper>
  );
};

export default IncrementDecrementButton;
