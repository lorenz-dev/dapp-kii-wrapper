import { Box, Grid2, useTheme } from '@mui/material'
import logoKii from '/logo.png'
import logoWhiteKii from '/logo_white.png'
import { useWalletConnector } from './providers/WalletConnector'
import { WrapperContainer } from './components/WrapperContainer'

function App() {
  const theme = useTheme()
  const isDarkMode = theme.palette.mode === 'dark'

  const { connector } = useWalletConnector()

  const logo = isDarkMode
    ? <img src={logoWhiteKii} alt="/Logo_Kii_2024.png" width="100%" />
    : <img src={logoKii} alt="/Logo_Kii_2024.png" width="100%" />

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
            {logo}
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
