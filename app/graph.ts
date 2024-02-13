import { cache } from 'react'

export const gql2 = cache(async () => {
  const apiUrl = process.env.GRAPH_ONE_URL || 'http://127.0.0.1:4000/graphql'
  const apiKey = process.env.GRAPH_ONE_KEY || 'letmein'
  const coKey = process.env.GRAPH_ONE_KEY2 || 'letmein'

  let graphql = JSON.stringify({
    query: `query getHistoricalBalance($days: String, $key: String) {
      getHistoricalBalance(days: $days, key: $key) {
        data {
          address
          chain_id
          chain_name
          next_update_at
          pagination
          quote_currency
          updated_at
          items {
            contract_name
            contract_ticker_symbol
            holdings {
              quote_rate
              close {
                balance
                pretty_quote
                quote
              }
              timestamp
            }
          }
        }
        error
        error_code
        error_message
      }
    }`,
    variables: {"days":"30","key":"ckey_05fbe84d5a634c9892149e24d6b"}
  })
  
  const requestBody = {
    query: `query getHistoricalBalance($days: String, $key: String) {
      getHistoricalBalance(days: $days, key: $key) {
        data {
          address
          chain_id
          next_update_at
          pagination
          updated_at
          items {
            contract_ticker_symbol
            holdings {
              close {
                balance
              }
              timestamp
            }
          }
        }
      }
    }`,
    "variables": {"days":"30","key": coKey}
  };


  const res = await fetch(apiUrl, {
    headers: {
      'Authorization': `apikey ${apiKey}`
    },
    method: 'POST',
    body: graphql
  })

  const { data } = await res.json()
  console.log(data)
  return data
})