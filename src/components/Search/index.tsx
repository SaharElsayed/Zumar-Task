import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchInput = styled.input`
  font-size: 16px;
  border: none;
  font-weight: 500;
  &:focus {
    outline: none;
  }
  ::placeholder {
    color: rgba(0, 0, 0, 0.2);
    font-family: "Poppins-SemiBold";
  }
`;

const IconContainer = styled.div`
  color: #999cad;
  padding: 0 15px;
`;

const Search = () => {
  return (
    <>
      <IconContainer>
        <FontAwesomeIcon icon={faSearch} size="lg" />
      </IconContainer>
      <SearchInput
        type="text"
        placeholder="Search by product name or seller"
      />
    </>
  );
};

export default Search;
