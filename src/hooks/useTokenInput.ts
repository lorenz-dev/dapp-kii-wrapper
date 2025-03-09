import { useState } from 'react'
import { formatUnits, parseUnits } from 'viem'

export const useTokenInput = ({
  decimals = 0,
}: { decimals?: number }) => {
  const [input, _setInput] = useState('')
  const [error, setError] = useState<string>()
  const [parsedAmount, setParsedAmount] = useState<bigint | null>(null)

  const setInput = (amount: string) => {
    _setInput(amount)

    try {
      const parsedAmount = parseUnits(amount, decimals)
      setParsedAmount(parsedAmount)
      setError(undefined)
    } catch (e) {
      setParsedAmount(null)
      setError('Invalid amount')
    }
  }

  return {
    input,
    parsedAmount,
    formattedAmount: parsedAmount ? formatUnits(parsedAmount, decimals) : null,
    error,
    setInput,
  }
}