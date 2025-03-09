import { FunctionComponent, PropsWithChildren } from 'react'
import { WagmiProvider } from 'wagmi'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { config } from './config.ts'
import { theme } from '../utils/theme.ts'
import { WalletConnectorProvider } from './WalletConnector'

const queryClient = new QueryClient()

export const Providers: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <WalletConnectorProvider>
            {children}
          </WalletConnectorProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}