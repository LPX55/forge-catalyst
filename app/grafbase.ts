import { cache } from 'react'

export const gql = cache(async (query: string, variables?: object, tag?: string, revaltime?: number) => {
  let slicedQuery = query;
  if (query.length >= 256) {
    slicedQuery = query.slice(0, 250);
  }
  const apiUrl = process.env.GRAFBASE_API_URL || 'https://forge-supergraph-lpx55-xf6yvtjg.grafbase.app/graphql'
  const apiKey = process.env.GRAFBASE_API_KEY || ''

  const res = await fetch(apiUrl, {
    headers: {
      'x-api-key': apiKey
    },
    method: 'POST',
    body: JSON.stringify({
      query,
      variables
    }),
    next: {
      tags: tag ? [slicedQuery] : [],
      revalidate: 180,
    }
  })

  const { data } = await res.json()

  return data
})