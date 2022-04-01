import React from 'react';
import styled from 'styled-components';
import {BsThreeDotsVertical} from 'react-icons/bs';
import Image from 'next/image';

const Coin = ({coin}) => {
    return (
        <Wrapper>
            <div>
                <div style={{flex: 3}}>
                    <NameCol>
                        <CoinIcon>
                            <Image src={coin.logo} alt={coin.name} />
                        </CoinIcon>
                    </NameCol>
                </div>
            </div>
        </Wrapper>
    );
};

export default Coin;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  
  & > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
  }
`;

const NameCol = styled.div`
  display: flex;
  align-items: center;
`

const CoinIcon = styled.div`
  width: 1.8rem;
  margin-right: 1rem;
`;

const Primary = styled.div`
  margin-bottom: 0.1rem;
`

const Secondary = styled.div`
  color: #8a919e;
  font-size: 0.8rem;
`
