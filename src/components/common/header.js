import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <Wrapper>
      <StyledLogo src="logo.png"></StyledLogo>
      <SearchInputBox></SearchInputBox>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 40%;
`;

const StyledLogo = styled.img`
  width: 8em;
  height: 8em;
  padding-top: 3em;
`;

export const SearchInputBox = styled.input`
  background: white;
  border: 1px solid #dddddd;
  border-radius: 2em;
  margin: 1em 1em;
  width: 20em;
  padding: 0.3em 1em;
  color: black;
  font-size: 1.5em;
  &::placeholder {
    color: lightgrey;
  }
  :focus {
    outline: none;
  }
`;
