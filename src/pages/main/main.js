import React from 'react';
import styled from 'styled-components';
import Header from '../../components/common/header';
import PromotionSlider from '../../components/main/promotion';

const main = () => {
  return (
    <Wrapper>
      <Header></Header>
      <PromotionSlider></PromotionSlider>
    </Wrapper>
  );
};

export default main;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
