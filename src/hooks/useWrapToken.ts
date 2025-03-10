import { useState } from 'react'
import { useChainId, useWaitForTransactionReceipt, useWriteContract } from 'wagmi'
import { parseAbi } from 'viem'
import { WKII_CONTRACT_ADDRESS } from '../constants.ts'

export function useWrapToken({
  amount,
}: { amount: bigint | null }) {
  const chainId = useChainId()

  const [txHash, setTxHash] = useState<`0x${string}`>()

  const { writeContractAsync, isPending, isError, isSuccess, error } = useWriteContract()

  const {
    isLoading: isWaitingForTx,
    isError: isWaitingForTxError,
    isSuccess: isWaitingForTxSuccess,
    error: waitingForTxError,
  } = useWaitForTransactionReceipt({
    hash: txHash,
    query: {
      enabled: Boolean(txHash),
    },
  })

  const execute = async () => {
    if (amount === null) return

    const _txHash = await writeContractAsync({
      address: WKII_CONTRACT_ADDRESS,
      functionName: 'deposit',
      abi: parseAbi([
        'function deposit() payable',
      ]),
      value: amount,
      chainId: chainId,
    })
    setTxHash(_txHash)
  }

  return {
    execute,
    isPending,
    isError,
    isSuccess,
    error,
    isWaitingForTx,
    isWaitingForTxError,
    isWaitingForTxSuccess,
    waitingForTxError,
  }
}