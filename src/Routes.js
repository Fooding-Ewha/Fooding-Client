import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

const Main = lazy(() => import('./pages/main/main'));
const Login = lazy(() => import('./pages/login/login'));

const App = () => {
  return (
    <Router>
      <RootContainer>
        <Container>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </Suspense>
        </Container>
      </RootContainer>
    </Router>
  );
};

const RootContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  margin: 0;
  background-image: url(${process.env.PUBLIC_URL + '/background.png'});
  background-repeat: no-repeat;
  background-size: cover;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  width: 65vw;
  height: 70vh;
  padding: 1%;
  background-color: #fbf9f6;
  border-radius: 50px;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.25);
  overflow-y: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;
export default App;
