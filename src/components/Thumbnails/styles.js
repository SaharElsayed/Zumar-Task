import styled from "styled-components";

export const ThumbanilsContainer = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: 0fr 0fr 0fr;
  justify-content: center;
`;

export const ImgContainer = styled.div`
  width: 80px;
  height: 75px;
  background-image: url(${(props) => props.theme.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 20px;
  justify-self: center;
  @media (max-width: 768px) {
    width: 70px;
    height: 65px;
  }
`;
