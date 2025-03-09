import { useState } from 'react'
import { Box, Button, ButtonGroup } from '@mui/material'

import { WrapToken } from './WrapToken'
import { UnwrapToken } from './UnwrapToken'

export const WrapperContainer = () => {
  const [tab, setTab] = useState<'wrap' | 'unwrap'>('wrap')

  const handleChangeTab = (tab: 'wrap' | 'unwrap') => {
    return () => setTab(tab)
  }

  return (
    <Box sx={{
      padding: '2rem',
      borderRadius: '7px',
      display: 'grid',
    }}>
      <ButtonGroup fullWidth size="large" variant="contained" sx={{
        marginBottom: '2rem',
      }}>
        <Button sx={{
          backgroundColor: theme => tab === 'wrap' ? theme.palette.primary.main : theme.palette.primary.dark,
        }} onClick={handleChangeTab('wrap')}>Wrap Token</Button>
        <Button sx={{
          backgroundColor: theme => tab === 'unwrap' ? theme.palette.primary.main : theme.palette.primary.dark,
        }} onClick={handleChangeTab('unwrap')}>Unwrap Token</Button>
      </ButtonGroup>

      {tab === 'wrap' && <WrapToken />}
      {tab === 'unwrap' && <UnwrapToken />}
    </Box>
  )
}