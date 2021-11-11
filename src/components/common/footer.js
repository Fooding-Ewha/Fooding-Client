import React from 'react';
import styled from 'styled-components';
import { Button } from './topBar';

const Footer = () => {
  return (
    <Wrapper>
      <Button>
        <img
          src={process.env.PUBLIC_URL + 'topButton.png'}
          alt="Top Button"
          style={{ width: '5em', height: '3em' }}
        />
      </Button>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 3em;
`;
