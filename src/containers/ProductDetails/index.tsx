import React, { useEffect, useState } from "react";
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
  const [order, setOrder] = useState({
    quantity: 51,
    initialPrice: 12000,
    shippingPrice: 100,
    totalOrder: 12100
  });

  useEffect(() => {
    onChangeOrder(
      "totalOrder",
      order.shippingPrice + order.initialPrice
    );
  }, [order.shippingPrice, order.initialPrice]);

  const changeQuantity = (q: number): void => {
    onChangeOrder("quantity", q);
  };

  const changeShippingOption = (optionPrice: number): void => {
    onChangeOrder("shippingPrice", optionPrice);
  };

  const onChangeOrder = (name: string, value: number): void => {
    setOrder((prevData) => ({ ...prevData, [name]: value }));
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
          initialPrice={order.initialPrice}
          quantity={order.quantity}
          changeQuantity={changeQuantity}
        />

        <ShippingOptions
          shippingPrice={order.shippingPrice}
          options={productData.shippingOptions}
          changeShippingOption={changeShippingOption}
        />
        <OrderAction totalOrder={order.totalOrder} />
      </DetailsSection>
    </GridContainer>
  );
};

export default ProductDetails;
