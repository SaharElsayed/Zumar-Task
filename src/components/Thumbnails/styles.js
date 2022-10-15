import styled from "styled-components";

export const ThumbanilsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
`;

export const ImgContainer = styled.div`
  width: 100%;
  min-height: 100px;
  background-image: url(${(props) => props.theme.src});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;
