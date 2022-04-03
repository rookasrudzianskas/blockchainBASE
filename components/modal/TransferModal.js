import React from 'react';
import styled from 'styled-components';

const TransferModal = () => {
    return (
        <Wrapper>
            <Selector>
                <Option>
                    <p>Send</p>
                </Option>
                <Option>
                    <p>Receive</p>
                </Option>
            </Selector>
        </Wrapper>
    );
};

export default TransferModal;

const Wrapper = styled.div`
  height: 35rem;
  width: 27rem;
  color: white;
  border: 1px solid #282b2f;
  display: flex;
  flex-direction: column;
`;

const Selector = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 5rem;
`;

const Option = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  place-items: center;
  font-size: 1.2rem;
  font-weight: 600;
  
  &:hover {
    cursor: pointer;
    background-color: #111214;
  }
`


