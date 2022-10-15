import React from "react";
import styled, { ThemeProvider } from "styled-components";

const ImgContainer = styled.div`
  width: 100%;
  min-height: 600px;
  background-image: url(${(props) => props.theme.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const ProductHeroImg = ({ imgSrc }: { imgSrc: string }) => {
  return (
    <ThemeProvider theme={{ src: imgSrc }}>
      <ImgContainer />
    </ThemeProvider>
  );
};

export default ProductHeroImg;
