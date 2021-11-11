import React from 'react';
import styled from 'styled-components';

const TopBar = () => {
  return (
    <Wrapper>
      <Button>
        <img
          src={process.env.PUBLIC_URL + 'menuButton.png'}
          alt="Menu Button"
          style={{ width: '3.5em', height: '2em' }}
        />
      </Button>
    </Wrapper>
  );
};

export { TopBar, Button };

const Wrapper = styled.div`
  width: 100%;
  height: 2em;
  display: flex;
  align-content: center;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-content: center;
  border: none;
  background: none;
`;
