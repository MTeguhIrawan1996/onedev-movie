// eslint-disable-next-line @typescript-eslint/ban-types
export function generateQueryParams<T extends {}>(filter: T) {
  return (
    Object.entries(filter as any)
      // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
      .filter(([_, value]) => !!value) // Filter out empty values
      .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value as any)}`)
      .join('&')
  );
}
