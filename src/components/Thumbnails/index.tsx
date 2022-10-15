import React from "react";
import { ThemeProvider } from "styled-components";
import { ThumbanilsContainer, ImgContainer } from "./styles";

const Thumbanils = ({ imgs }: { imgs: string[] }) => {
  return (
    <ThumbanilsContainer>
      {imgs.map((img, index) => (
        <ThemeProvider key={`img-${index}`} theme={{ src: img }}>
          <ImgContainer />
        </ThemeProvider>
      ))}
    </ThumbanilsContainer>
  );
};

export default Thumbanils;
