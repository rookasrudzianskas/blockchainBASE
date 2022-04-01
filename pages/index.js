import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {useWeb3} from "@3rdweb/hooks";
import styled from 'styled-components'

export default function Home() {
    const {address, connectWallet} = useWeb3();

  return (
    <div>
      <Head>
        <title>BlockChain BASE</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <Wrapper>
            {address ? (
                <Dashboard address={address} />
            ) : (
                <WalletConnect>
                    <Button onClick={() => connectWallet('injected')}>
                        Connect Wallet
                    </Button>
                    <Details>
                        You need Chrome to be <br/> able to run this app.
                    </Details>
                </WalletConnect>
            )}
        </Wrapper>
    </div>
  )
}

const Wrapper = styled.div`
    display: flex;
    height: 100vh;
    max-width: 100vw;
    background-color: #0a0b0d;
    color: white;
    display: grid;
    place-items: center;
`;

const WalletConnect = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Dashboard = styled.div`

`;

const Button = styled.div`
  border: 1px solid #282b2f;
  padding: 0.8rem;
`
const Details = styled.div`

`
