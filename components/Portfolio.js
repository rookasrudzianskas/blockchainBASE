import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {BsThreeDotsVertical} from "react-icons/bs";
import {coins} from "../static/coins";
import Coin from "./Coin";
import BalanceChart from "./BalanceChart";
import NextCors from 'nextjs-cors';

const Portfolio = () => {
    const [sanityTokens, setSanityTokens] = useState([]);

    // useEffect(() => {
    //     async function handler(req, res) {
    //         // Run the cors middleware
    //         // nextjs-cors uses the cors package, so we invite you to check the documentation https://github.com/expressjs/cors
    //         await NextCors(req, res, {
    //             // Options
    //             methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    //             origin: '*',
    //             optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    //         });
    //
    //         // Rest of the API logic
    //         res.json({ message: 'Hello NextJs Cors!' });
    //     }
    //
    //     handler().then();
    // }, [])

    useEffect(() => {
        const getCoins = async () => {
            try {
                // let headers = new Headers();
                // headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
                // headers.append("Access-Control-Allow-Headers",
                //     "Origin, X-Requested-With, Content-Type, Accept, Authorization");
                // headers.append("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");

                // const coins = await fetch("https://t9otsq1j.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%3D%3D'coins'%5D%20%7B%0A%20%20name%2C%0A%20%20usdPrice%2C%0A%20%20contractAddress%2C%0A%20%20symbol%2C%0A%20%20logo%0A%7D", {
                //         mode: 'cors',
                //         credentials: 'include',
                //         method: 'POST',
                //         headers: headers
                //     });
                const tempSanityTokens = await coins.json();
                setSanityTokens(tempSanityTokens.result);
                console.log("This is it", tempSanityTokens.result);
            } catch (e) {
                console.log(e);
            }
        }
        getCoins().then();
    }, []);
    return (
        <Wrapper>
            <Content>
                <Chart>
                    <div>
                        <Balance>
                            <BalanceTitle>Portfolio balance</BalanceTitle>
                            <BalanceValue>
                                {'$'}
                                {/*{walletBalance.toLocaleString()}*/}
                                46,990.00
                            </BalanceValue>
                        </Balance>
                    </div>
                <BalanceChart />
                </Chart>
            <PortfolioTable style={{paddingBottom: '5rem'}}>
                <TableItem>
                    <Title>Your Assets</Title>
                </TableItem>
                <Divider />
                <Table>
                    <TableItem>
                        <TableRow>
                            <div style={{flex: 3}}>
                                Name
                            </div>
                            <div style={{flex: 2}}>
                                Balance
                            </div>
                            <div  style={{flex: 1}}>
                                Price
                            </div>
                            <div  style={{flex: 1}}>
                                Allocation
                            </div>
                            <div  style={{flex: 0}}>
                                <BsThreeDotsVertical />
                            </div>
                        </TableRow>
                    </TableItem>
                    <Divider />
                    <div>
                        {coins.map((coin, index) => (
                            <div key={index}>
                                <Coin coin={coin} />
                                <Divider />
                            </div>
                        ))}
                    </div>
                </Table>
            </PortfolioTable>
            </Content>
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
  max-width: 1000px;
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

const Balance = styled.div`

`;

const BalanceTitle = styled.div`
  color: #8a919e;
  font-size: 0.9rem;
`;

const BalanceValue = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0.5rem 0;
`

const Chart = styled.div`
  border: 1px solid #282b2f;
  padding: 1rem 2rem;
`
