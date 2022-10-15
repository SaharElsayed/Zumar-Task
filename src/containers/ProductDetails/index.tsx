import React from "react";
import ProductHeroImg from "../../components/ProductHeroImg";
import Thumbanils from "../../components/Thumbnails";
import productData from "./data.json";
import RatingSection from "./subComponents/RatingSection";

import {
  GridContainer,
  ImagesSection,
  ProductName,
  DetailsSection
} from "./styles";
import PricingOptions from "./subComponents/PricingOptions";
import ColorsOptions from "./subComponents/ColorsOptions";
import StorageOptions from "./subComponents/StorageOptions";

const ProductDetails = () => {
  return (
    <GridContainer>
      <ImagesSection>
        <ProductHeroImg imgSrc={productData.heroImg} />
        <Thumbanils imgs={productData.thumbnails} />
      </ImagesSection>

      <DetailsSection>
        <ProductName>{productData.name}</ProductName>
        <RatingSection
          productCode={productData.code}
          rating={productData.rate}
        />
        <PricingOptions options={productData.pricingOptions} />
        <ColorsOptions options={productData.colorsOptions} />
        <StorageOptions options={productData.storageOptions} />
      </DetailsSection>
    </GridContainer>
  );
};

export default ProductDetails;
