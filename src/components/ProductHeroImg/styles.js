import styled from "styled-components";

export const ImgContainer = styled.div`
  width: 100%;
  min-height: 600px;
  background-image: url(${(props) => props.theme.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  @media (min-width: 1440px) {
    background-size: contain;
  }
  @media (max-width: 768px) {
    background-size: contain;
    min-height: 200px;
  }
`;
