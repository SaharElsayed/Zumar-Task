import React from "react";
// import Rating from "react-rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
// import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";
import {
  RatingContainer,
  Stars,
  RateNumber,
  NumberOfRaters
} from "./styles";
const RatingComp = ({
  rate
}: {
  rate: { rate: number; numberOfRaters: string };
}) => {
  return (
    <RatingContainer>
      <Stars>
        <FontAwesomeIcon icon={faStar} size="sm" />
        <FontAwesomeIcon icon={faStar} size="sm" />
        <FontAwesomeIcon icon={faStar} size="sm" />
        <FontAwesomeIcon icon={faStar} size="sm" />
        <FontAwesomeIcon icon={faStar} size="sm" />
      </Stars>
      <RateNumber>{rate.rate}</RateNumber>
      <NumberOfRaters>{`(${rate.numberOfRaters})`}</NumberOfRaters>
      {/* <Rating
        initialRating={rate.rate}
        emptySymbol={
          <FontAwesomeIcon
            icon={emptyStar}
            size="sm"
            className="icon"
          />
        }
        fullSymbol={
          <FontAwesomeIcon icon={faStar} size="sm" className="icon" />
        }
        readonly
      /> */}
    </RatingContainer>
  );
};

export default RatingComp;
