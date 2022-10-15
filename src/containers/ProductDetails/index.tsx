import React, { useState } from "react";
import ProductHeroImg from "../../components/ProductHeroImg";
import Thumbanils from "../../components/Thumbnails";
import productData from "./data.json";
import RatingSection from "./subComponents/RatingSection";
import PricingOptions from "./subComponents/PricingOptions";
import ColorsOptions from "./subComponents/ColorsOptions";
import StorageOptions from "./subComponents/StorageOptions";
import Quantity from "./subComponents/Quantity";

import {
  GridContainer,
  ImagesSection,
  ProductName,
  DetailsSection
} from "./styles";
import ShippingOptions from "./subComponents/ShippingOptions";
import OrderAction from "./subComponents/OrderAction";

const ProductDetails = () => {
  const [order, setOrder] = useState({ quantity: 51 });

  const changeQuantity = (q: number): void => {
    setOrder({ quantity: q });
    console.log(q);
  };

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
        <Quantity
          quantity={order.quantity}
          changeQuantity={changeQuantity}
        />
        <ShippingOptions options={productData.shippingOptions} />
        <OrderAction />
      </DetailsSection>
    </GridContainer>
  );
};

export default ProductDetails;
