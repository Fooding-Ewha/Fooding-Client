import React from 'react';
import styled from 'styled-components';
import Header from '../../components/common/header';

const main = () => {
  return (
    <Wrapper>
      <Header></Header>
    </Wrapper>
  );
};

export default main;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
