import { cache } from 'react'

export const gql = cache(async (query: string, variables?: object, tag?: string, revaltime?: number) => {
  let slicedQuery = query;
  if (query.length >= 256) {
    slicedQuery = query.slice(0, 250);
  }
  const apiUrl = process.env.GRAFBASE_API_URL || 'https://forge-supergraph-lpx55-xf6yvtjg.grafbase.app/graphql'
  const apiKey = process.env.GRAFBASE_API_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MDI2MDY4MTEsImlzcyI6ImdyYWZiYXNlIiwiYXVkIjoiMDFISE5NQ0IySkRBSjhIR0NTVkVYUlROUVAiLCJqdGkiOiIwMUhITk1DQ1JZNVhLWkU2VlA3WE5GN1YyMCIsImVudiI6InByb2R1Y3Rpb24iLCJwdXJwb3NlIjoicHJvamVjdC1hcGkta2V5In0.Q1aDeNX8TVFULOetp4ihyqrV3EL822B3j4hJGa0lMj4'

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