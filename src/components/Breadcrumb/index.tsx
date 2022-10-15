import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const BreadCrumbContainer = styled.div`
  display: flex;
  align-item: center;
  padding: 30px 0;
  font-size: 13px;
  color: ${(props) => props.theme.grey};
`;

const ItemContainer = styled.div`
  display: flex;
  align-item: center;
`;

const IconContainer = styled.div`
  padding: 0 5px;
`;

const Breadcrumb = ({
  items
}: {
  items: { id: number; text: string }[];
}) => {
  return (
    <BreadCrumbContainer>
      {items.map((item, index) => (
        <ItemContainer key={item.id}>
          <p>{item.text}</p>
          {index < items.length - 1 && (
            <IconContainer>
              <FontAwesomeIcon icon={faChevronRight} size="sm" />
            </IconContainer>
          )}
        </ItemContainer>
      ))}
    </BreadCrumbContainer>
  );
};

export default Breadcrumb;
