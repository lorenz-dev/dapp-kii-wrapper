import { FunctionComponent, PropsWithChildren } from 'react'
import { Alert, Box, Typography, useTheme } from '@mui/material'
import { CircleCheck, CircleEllipsis, CircleX } from 'lucide-react'

export type StepsProps = PropsWithChildren<{
  label: string;
  isSuccess?: boolean;
  isLoading?: boolean;
  isError?: boolean;
}>

export const Steps: FunctionComponent<StepsProps> = ({
  label,
  isSuccess,
  isLoading,
  isError,
}) => {
  const theme = useTheme()

  return <Box>
    <Typography sx={{
      display: 'flex',
      alignItems: 'center',
      gap: '.25rem',
    }}>
      {label}
      {isSuccess && <CircleCheck color={theme.palette.success.main} />}
      {isLoading && <CircleEllipsis />}
      {isError && <CircleX color={theme.palette.error.main} />}
    </Typography>
  </Box>
}