import { STORE_API_URL } from './storeApi'

export const fetchFromStoreApi = async (
  query: string,
  variables?: { [key: string]: string }
): Promise<Response> => {
  const fetchData = variables ? { query, variables } : { query }

  const response = await fetch(STORE_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'Application/json',
    },
    body: JSON.stringify({
      ...fetchData,
    }),
  })
  if (!response.ok) {
    const responseData = await response.json()
    throw new Error('Data fetching failed')
  }

  return response
}
