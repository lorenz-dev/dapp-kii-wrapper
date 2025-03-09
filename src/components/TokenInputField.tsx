import { Box, Typography } from '@mui/material'
import { ChangeEvent, FunctionComponent } from 'react'

export type TokenInputFieldProps = {
  value: string;
  placeholder?: string;
  setValue?: (value: string) => void;
  error?: string;
}

export const TokenInputField: FunctionComponent<TokenInputFieldProps> = ({
  value,
  placeholder,
  setValue,
  error,
}) => {

  const handleOnChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const value = evt.target.value
    setValue?.(value)
  }

  return (
    <Box sx={{
      display: 'grid',
    }}>
      <Box sx={{
        backgroundColor: theme => theme.palette.background.default,
        padding: '8px',
        borderRadius: '4px',
      }}>
        <input placeholder={placeholder} value={value} onChange={handleOnChange} style={{
          all: 'unset',
          textAlign: 'right',
          width: '100%',
          fontSize: '1.5rem',
        }} />
      </Box>

      {error && <Typography variant="overline" color="error" sx={{
        textAlign: 'right',
      }}>
        {error}
      </Typography>}
    </Box>
  )
}
