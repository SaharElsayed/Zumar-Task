import styled from "styled-components";

export const BreadCrumbContainer = styled.div`
  display: flex;
  align-item: center;
  padding: 30px 0;
  font-size: 13px;
  width: 100%;
  color: ${(props) => props.theme.grey};
  @media (max-width: 425px) {
    flex-wrap: wrap;
    padding: 30px 20px;
  }
`;

export const ItemContainer = styled.div`
  display: flex;
  align-item: center;
`;

export const IconContainer = styled.div`
  padding: 0 5px;
`;
