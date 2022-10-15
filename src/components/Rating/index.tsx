import React from "react";
import { Rating } from "react-simple-star-rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";
import {
  RatingContainer,
  Stars,
  RateNumber,
  NumberOfRaters,
  TextContainer
} from "./styles";
const RatingComp = ({
  rate
}: {
  rate: { rate: number; numberOfRaters: string };
}) => {
  return (
    <RatingContainer>
      <Stars>
        <Rating
          initialValue={rate.rate}
          readonly
          fillColor="#F9C744"
          emptyColor="#F9C744"
          emptyIcon={<FontAwesomeIcon icon={emptyStar} size="sm" />}
          fillIcon={<FontAwesomeIcon icon={faStar} size="sm" />}
        />
      </Stars>

      <TextContainer>
        <RateNumber>{rate.rate}</RateNumber>
        <NumberOfRaters>{`(${rate.numberOfRaters})`}</NumberOfRaters>
      </TextContainer>
    </RatingContainer>
  );
};

export default RatingComp;
