import React from 'react';
import Header from "../components/Header";
import styled from 'styled-components';

const Dashboard = ({address}) => {
    return (
        <Wrapper>
            <Header />
        </Wrapper>
    );
};

export default Dashboard;

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vh;
  background-color: #0a0b0d;
  color: white;
`
const MainContainer = styled.div`
  flex: 1;
`
