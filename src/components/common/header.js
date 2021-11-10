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
`;

const StyledLogo = styled.img`
  width: 6em;
  height: 6em;
  padding-top: 2em;
`;

export const SearchInputBox = styled.input`
  background: white;
  border: 1px solid #dddddd;
  border-radius: 2em;
  margin: 1em 1em;
  width: 18em;
  color: black;
  font-size: 2em;
  &::placeholder {
    color: lightgrey;
  }
`;
