import React from 'react';
import styled from 'styled-components';
import {BsThreeDotsVertical} from "react-icons/bs";

const Portfolio = () => {
    return (
        <Wrapper>
            <PortfolioTable>
                <TableItem>
                    <Title>Your Assets</Title>
                </TableItem>
                <Divider />
                <Table>
                    <TableItem>
                        <TableRow>
                            <div>
                                Name
                            </div>
                            <div>
                                Balance
                            </div>
                            <div>
                                Price
                            </div>
                            <div>
                                Allocation
                            </div>
                            <div>
                                <BsThreeDotsVertical />
                            </div>
                        </TableRow>
                    </TableItem>
                </Table>
            </PortfolioTable>
        </Wrapper>
    );
};

export default Portfolio;

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  width: 100%;
  max-width: 100px;
  padding: 2rem 1rem;
`

const PortfolioTable = styled.div`
  margin-top: 1rem;
  border: 1px solid #282b2f;
`;

const Table = styled.div`
  width: 100%;
`;

const TableRow = styled.tr`
  width: 100%;
  display: flex;
  justify-content: space-between;
  
  & > th {
    text-align: center;
  }
`;

const TableItem = styled.div`
  padding: 1rem 2rem;
`;

const Divider = styled.div`
  border-bottom: 1px solid #282b2f;
`;

const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
`;
