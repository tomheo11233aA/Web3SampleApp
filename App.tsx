import '@walletconnect/react-native-compat'
import { WagmiConfig } from 'wagmi'
import { mainnet, polygon, arbitrum } from 'viem/chains'
import { createWeb3Modal, defaultWagmiConfig, Web3Modal } from '@web3modal/wagmi-react-native'
import React from 'react'
import { Text, View } from 'react-native'
import { W3mButton } from '@web3modal/wagmi-react-native'
import { useAccount, useBalance } from 'wagmi'



const projectId = '6ee3a3995bd809d80e5626f87fbb45ae'

const metadata = {
  name: 'Web3Modal RN',
  description: 'Web3Modal RN Example',
  url: 'https://web3modal.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886'],
  redirect: {
    native: 'testtomheo://',
  }
}

const chains = [mainnet, polygon, arbitrum]

const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata })

createWeb3Modal({
  projectId,
  chains,
  wagmiConfig,
  enableAnalytics: true
})

export default function App() {
  return (
    <WagmiConfig config={wagmiConfig}>
      <W3mButton />
      <Web3Modal />
    </WagmiConfig>
  )
}