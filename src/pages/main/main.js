import React from 'react';
import styled from 'styled-components';
import Header from '../../components/common/header';
import { TopBar } from '../../components/common/topBar';
import Footer from '../../components/common/footer';
import PromotionSlider from '../../components/main/promotion';

const main = () => {
  return (
    <Wrapper>
      <TopBar />
      <Container>
        <Header></Header>
        <PromotionSlider></PromotionSlider>
      </Container>
      <Footer />
    </Wrapper>
  );
};

export default main;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: ; */
  width: 100%;
  height: 100%;
`;
