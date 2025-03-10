import { Box, Grid2, useTheme } from '@mui/material'
import { useWalletConnector } from './providers/WalletConnector'
import { WrapperContainer } from './components/WrapperContainer'

function App() {
  const theme = useTheme()

  const { connector } = useWalletConnector()

  return (
    <Box
      sx={{
        display: 'grid',
        gridAutoRows: 'min-content 1fr',
        height: '100vh',
      }}
    >
      <Grid2
        container
        direction="row"
        sx={{
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1rem',
        }}
      >
        <Box sx={{
          maxWidth: '100px',
        }}>
          <a href="https://kiichain.io/" target="_blank">
            <img
              src="https://raw.githubusercontent.com/lorenz-dev/dapp-kii-wrapper/refs/heads/main/public/logo_white.png"
              alt="https://raw.githubusercontent.com/lorenz-dev/dapp-kii-wrapper/refs/heads/main/public/logo_white.png"
              width="100%"
            />
          </a>
        </Box>

        {connector}
      </Grid2>

      <Box
        sx={{
          display: 'grid',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            width: '600px',
            backgroundColor: theme.palette.secondary.main,
            borderRadius: theme.shape.borderRadius,
          }}
        >
          <WrapperContainer />
        </Box>
      </Box>
    </Box>
  )
}

export default App
