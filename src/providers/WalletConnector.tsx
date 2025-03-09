import { createContext, FunctionComponent, PropsWithChildren, ReactNode, useContext, useState } from 'react'
import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { Box, Button, Card, Dialog, Tooltip, Typography } from '@mui/material'
import { ellipsis } from '../utils/address'

export type WalletConnectorProps = PropsWithChildren<{
  open?: (value: boolean) => void;
  connector?: ReactNode
}>

const WalletConnector = createContext<WalletConnectorProps>({
  open: undefined,
  connector: undefined,
})

export const useWalletConnector = () => useContext(WalletConnector)

export const WalletConnectorProvider: FunctionComponent<WalletConnectorProps> = ({ children }) => {
  const { isConnected, address } = useAccount()
  const { connectors, connect } = useConnect()
  const { disconnect } = useDisconnect()

  const [open, setOpen] = useState<boolean>(false)

  const handleOnConnectClick = (connector: typeof connectors[number]) => {
    return () => connect({ connector })
  }

  const connectButton = <Button variant="outlined" onClick={() => setOpen(true)}>
    Connect Wallet
  </Button>

  const disconnectButton = address && <Box sx={{
    display: 'grid',
    textAlign: 'right',
  }}>
    <Tooltip title={address}>
      <Typography>{ellipsis(address)}</Typography>
    </Tooltip>
    <Button variant="outlined" onClick={() => disconnect()}>
      Disconnect
    </Button>
  </Box>

  const connector = isConnected ? disconnectButton : connectButton

  return (
    <WalletConnector.Provider value={{
      open: setOpen,
      connector,
    }}>
      {children}

      <Dialog open={open} onClose={() => setOpen(false)}>
        <Card sx={{
          padding: '1.5rem',
          maxWidth: '400px',
        }}>
          <h3>Connectors</h3>
          <Box sx={{
            display: 'grid',
            gap: '1rem',
          }}>
            {
              connectors.map((connector) => (
                <Button variant="outlined" key={connector.uid} onClick={handleOnConnectClick(connector)} sx={{
                  gap: '.5rem',
                }}>
                  <Box sx={{
                    display: 'flex',
                    width: '25px',
                    alignItems: 'center',
                  }}>
                    <img src={connector.icon} width="100%" />
                  </Box>

                  <Typography>{connector.name}</Typography>
                </Button>
              ))
            }
          </Box>
        </Card>
      </Dialog>
    </WalletConnector.Provider>
  )
}