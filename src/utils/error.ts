export function parseError(error: Error | any | null): string | null {
  if (!error) return null

  return error['shortMessage'] ?? error['message']
}