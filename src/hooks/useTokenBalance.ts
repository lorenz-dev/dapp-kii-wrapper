import { useReadContracts } from 'wagmi'
import { parseAbi, Address, formatUnits } from 'viem'
import { useMemo } from 'react'

export function useTokenBalance({
  contract,
  address,
}: { contract?: Address, address?: Address }) {
  const { data, ...others } = useReadContracts({
    contracts: [
      {
        address: contract,
        functionName: 'balanceOf',
        abi: parseAbi([
          'function balanceOf(address) returns (uint256)',
        ]),
        args: [address!],
      },
      {
        address: contract,
        functionName: 'symbol',
        abi: parseAbi([
          'function symbol() returns (string)',
        ]),
      },
      {
        address: contract,
        functionName: 'decimals',
        abi: parseAbi([
          'function decimals() returns (uint8)',
        ]),
      },
    ],
    query: {
      enabled: Boolean(contract && address),
    },
  })

  const _data: {
    decimals: number;
    formatted: string;
    symbol: string;
    value: bigint;
  } | undefined = useMemo(() => {
    if (!data) return undefined

    return {
      decimals: data[2].result,
      formatted: formatUnits(data[0].result ?? 0n, data[2].result ?? 18),
      symbol: data[1].result,
      value: data[0].result,
    }
  }, [data])

  return {
    ...others,
    data: _data,
  }
}