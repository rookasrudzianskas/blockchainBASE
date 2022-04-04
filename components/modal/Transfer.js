import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {FaWallet} from "react-icons/fa";
import imageUrlBuilder from '@sanity/image-url';
import {client} from '../../lib/sanity';

const Transfer = ({selectedToken, setAction, thirdWebTokens, walletAddress}) => {
    const [amount, setAmount] = React.useState(0);
    const [recipient, setRecipient] = React.useState('');
    const [builder] = useState(imageUrlBuilder(client));
    const [imageUrl, setImageUrl] = useState(null);
    const [activeThirdWebToken, setActiveThirdWebToken] = useState(null);

    useEffect(() => {
        console.log("This is selected token: 🔥", selectedToken);
        // if(selectedToken > 0) {
        //     const url = imageUrlBuilder(client).image(selectedToken.logo).url();
        //     console.log(url);
        // }
        const url = 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Ethereum_logo_2014.svg/1257px-Ethereum_logo_2014.svg.png';
        setImageUrl(url);
    }, [selectedToken]);

    useEffect(() => {
        const activeToken = thirdWebTokens.find(token => token.address === selectedToken?.contractAddress);
        console.log(activeToken, '🔫');
    }, [thirdWebTokens, selectedToken]);

    return (
        <Wrapper>
            <Amount>
                <FlexInputContainer>
                    <FlexInput
                        type="number"
                        placeholder="0"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />
                    <span>ETH</span>
                </FlexInputContainer>
                <Warning style={{color: amount && '#0a0b0d'}}>
                    Amount is required field
                </Warning>
            </Amount>

            <TransferForm>
                <Row>
                    <FieldName>To</FieldName>
                    <Icon>
                        <FaWallet />
                    </Icon>
                    <Recipient
                        placeholder="Address"
                        value={recipient}
                        onChange={(e) => setRecipient(e.target.value)}
                    />
                </Row>
                <Divider />
                <Row>
                    <FieldName>
                        Pay with
                    </FieldName>
                    <CoinSelectList>
                        <Icon>
                            <img src={imageUrl} style={{width: '20px', height: '20px'}} alt=""/>
                        </Icon>
                        <CoinName>Ethereum</CoinName>
                    </CoinSelectList>
                </Row>
            </TransferForm>
            <Row>
                <Continue>Continue</Continue>
            </Row>
            <Row>
                <BalanceTitle>ETH Balance</BalanceTitle>
                <Balance>1.2 ETH</Balance>
            </Row>

        </Wrapper>
    );
};

export default Transfer;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  flex: 1;
`

const TransferForm = styled.div`
  border: 1px solid #282b2f;
  border-radius: 0.4rem;
`

const Amount = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

const FlexInputContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-end;
  & > span {
    font-size: 3rem;
    margin-bottom: 0.5rem;
    color: #3773f5;
  }
`

const FlexInput = styled.input`
  border: none;
  background: none;
  outline: none;
  color: white;
  font-size: 1.2rem;
  text-wrap: wrap;
  text-align: right;
  max-width: 45%;
  margin-right: 1rem;
  font-size: 4.5rem;
  color: #3773f5;
  &::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`

const Warning = styled.div`
  /* TRouBLe */
  padding: 1rem 0 2rem 0;
  text-align: center;
  color: #8a919e;
`

const Divider = styled.div`
  border-bottom: 1px solid #282b2f;
`

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #8a919e;
  padding: 1rem 0;
  font-size: 1.2rem;
`
const FieldName = styled.div`
  flex: 0.5;
  padding-left: 2rem;
`

const Icon = styled.div`
  margin-right: 1rem;
  height: 1.8rem;
  width: 1.8rem;
  border-radius: 50%;
  overflow: hidden;
  display: grid;
  place-items: center;
  & > img {
    /* margin: -0.5rem 1rem; */
    height: 120%;
    width: 120%;
    object-fit: cover;
  }
`

const Recipient = styled.input`
  flex: 1;
  border: none;
  background: none;
  outline: none;
  color: white;
  font-size: 1.2rem;
  text-wrap: wrap;
  margin-right: 0.5rem;
`

const CoinSelectList = styled.div`
  display: flex;
  flex: 1.3;
  height: 100%;
  &:hover {
    cursor: pointer;
  }
`

const CoinName = styled.div`
  flex: 1;
  border: none;
  background: none;
  outline: none;
  color: white;
  font-size: 1.2rem;
  text-wrap: wrap;
  margin-right: 0.5rem;
`

const Continue = styled.button`
  color: white;
  width: 100%;
  background-color: #3773f5;
  padding: 1rem;
  text-align: center;
  border-radius: 0.4rem;
  font-size: 1.2rem;
  &:hover {
    cursor: pointer;
    background-color: #4a80f6;
  }
`

const BalanceTitle = styled.div``

const Balance = styled.div``
