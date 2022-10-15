import React from "react";
import RatingComp from "../../../../components/Rating";
import { ProductCode, RatingContainer } from "./styles";

const RatingSection = ({
  productCode,
  rating
}: {
  productCode: string;
  rating: { rate: number; numberOfRaters: string };
}) => {
  return (
    <RatingContainer>
      <ProductCode>Product Code: {productCode}</ProductCode>
      <RatingComp rate={rating} />
    </RatingContainer>
  );
};

export default RatingSection;
