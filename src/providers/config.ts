import { http, createConfig } from 'wagmi'
import { defineChain } from 'viem'

const kiiChainTestnet = defineChain({
  id: 1336,
  name: 'Kiichain Testnet Oro',
  network: 'Kiichain Testnet Oro',
  nativeCurrency: {
    decimals: 18,
    name: 'ukii',
    symbol: 'ukii',
  },
  rpcUrls: {
    default: {
      http: ['https://json-rpc.dos.sentry.testnet.v3.kiivalidator.com/'],
    },
  },
  blockExplorers: {
    default: { name: 'KiiChain Explorer', url: 'https://app.kiiglobal.io/kiichain3' },
  },
  testnet: true,
})

export const config = createConfig({
  chains: [kiiChainTestnet],
  syncConnectedChain: true,
  // auto-recognize installed injected wallet extensions
  // connectors: []
  transports: {
    [kiiChainTestnet.id]: http(),
  },
})