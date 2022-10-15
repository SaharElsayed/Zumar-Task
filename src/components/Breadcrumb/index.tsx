import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import {
  BreadCrumbContainer,
  ItemContainer,
  IconContainer
} from "./styles";

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
