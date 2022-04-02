import React from 'react';
import Portfolio from "./Portfolio";
import styled from 'styled-components';
import Promos from "./Promos";

const Main = ({thirdWebTokens, sanityTokens, walletAddress}) => {
    return (
        <Wrapper>
            <Portfolio thirdWebTokens={thirdWebTokens} sanityTokens={sanityTokens} walletAddress={walletAddress} />
            <Promos />
        </Wrapper>
    );
};

export default Main;

const Wrapper = styled.div`
  display: flex;
  max-height: calc(100vh - 64px);
  overflow: hidden;
  overflow-y: scroll;
  
  & div {
    border-radius: 0.4rem;
  }
`
