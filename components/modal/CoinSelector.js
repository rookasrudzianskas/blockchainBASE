import React from 'react';
import styled from 'styled-components';

const CoinSelector = ({
                          setAction,
                          selectedToken,
                          setSelectedToken,
                          sanityTokens,
                          walletAddress,
                      }) => {
    return (
        <Wrapper>
    <h2>This is working</h2>
        </Wrapper>
    );
};

export default CoinSelector;

const Wrapper = styled.div``
const Title = styled.div`
  width: 100%;
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`
const CoinList = styled.div`
  display: flex;
  flex-direction: column;
`
