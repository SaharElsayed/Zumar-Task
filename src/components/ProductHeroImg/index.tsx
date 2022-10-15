import React from "react";
import { ThemeProvider } from "styled-components";
import { ImgContainer } from "./styles";

const ProductHeroImg = ({ imgSrc }: { imgSrc: string }) => {
  return (
    <ThemeProvider theme={{ src: imgSrc }}>
      <ImgContainer />
    </ThemeProvider>
  );
};

export default ProductHeroImg;
