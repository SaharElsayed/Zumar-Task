import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { IconContainer, SearchInput, FlexContainer } from "./styles";

const Search = () => {
  return (
    <FlexContainer>
      <IconContainer>
        <FontAwesomeIcon icon={faSearch} size="lg" />
      </IconContainer>
      <SearchInput
        type="text"
        placeholder="Search by product name or seller"
      />
    </FlexContainer>
  );
};

export default Search;
