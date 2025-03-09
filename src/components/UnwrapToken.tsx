import { Alert, Box, Button, Typography } from '@mui/material'
import { useAccount } from 'wagmi'

import { TokenInputField } from './TokenInputField'
import { ConnectButton } from './ConnectButton'
import { Steps } from './Steps'

import { useUnwrapToken } from '../hooks/useUnwrapToken'
import { useTokenInput } from '../hooks/useTokenInput'
import { useTokenBalance } from '../hooks/useTokenBalance.ts'
import { parseError } from '../utils/error'

export const UnwrapToken = () => {
  const { isConnected, address } = useAccount()
  const { data: balance, error: balanceError, isLoading } = useTokenBalance({
    contract: '0xd51e7187e54a4A22D790f8bbDdd9B54b891Bc920',
    address,
  })

  const { input, parsedAmount, setInput, error: inputError } = useTokenInput({
    decimals: balance?.decimals,
  })

  const {
    execute,
    isPending,
    isError,
    isSuccess,
    error,
    isWaitingForTx,
    isWaitingForTxError,
    isWaitingForTxSuccess,
    waitingForTxError,
  } = useUnwrapToken({
    amount: parsedAmount,
  })

  const loading = isLoading || isPending || isWaitingForTx

  const errorMessage = error ?? waitingForTxError

  return (
    <Box sx={{
      display: 'grid',
      gap: '.75rem',
    }}>
      <Box sx={{
        display: 'grid',
        gridAutoFlow: 'column',
        justifyContent: 'space-between',
      }}>
        <Typography>Wrapped Balance:</Typography>
        <Box sx={{
          display: 'grid',
        }}>
          <Typography>{isLoading && 'Loading ...'}</Typography>
          <Typography>{balance?.formatted} {balance?.symbol}</Typography>
          <Typography>{!isConnected && '--'}</Typography>
        </Box>
      </Box>

      {balanceError?.message && <Typography color="error">
        {balanceError?.message}
      </Typography>}

      <TokenInputField placeholder="0" value={input} setValue={setInput} error={inputError} />

      <ConnectButton>
        <Button
          disabled={!parsedAmount}
          variant="contained"
          loading={loading}
          color="primary"
          onClick={() => execute()}>
          Unwrap Token
        </Button>
      </ConnectButton>

      <Box>
        <Steps
          label="User Confirmation"
          isSuccess={isSuccess}
          isLoading={isPending}
          isError={isError}
        />

        <Steps
          label="Transaction Confirmation"
          isSuccess={isWaitingForTxSuccess}
          isLoading={isWaitingForTx}
          isError={isWaitingForTxError}
        />
      </Box>

      {
        errorMessage && <Alert severity="error">
          {parseError(errorMessage)}
        </Alert>
      }
    </Box>
  )
}