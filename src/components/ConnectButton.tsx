import { FunctionComponent, PropsWithChildren } from 'react'
import { Button as MuiButton, Typography } from '@mui/material'
import { useAccount } from 'wagmi'
import { useWalletConnector } from '../providers/WalletConnector'

export type ButtonProps = PropsWithChildren<{
  onClick?: () => void
}>

export const ConnectButton: FunctionComponent<ButtonProps> = ({ children, onClick, ...props }) => {
  const { isConnected } = useAccount()
  const { open } = useWalletConnector()

  if (isConnected) return children

  const handleOnClick = isConnected ? onClick : () => open?.(true)

  return (
    <MuiButton
      variant="outlined"
      {...props}
      onClick={handleOnClick}
    >
      <Typography>
        Connect
      </Typography>
    </MuiButton>
  )
}
