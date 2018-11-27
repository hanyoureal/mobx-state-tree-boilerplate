const BASE_URL = 'http://5bfbc855cf9d29001345c4e1.mockapi.io/mobxtest'

export default function makeRequest({ endpoint, method }) {
  const headers = new Headers()
  headers.append('content-type', 'application/json')

  const request = new Request(
    `${BASE_URL}/${endpoint}`,
    {
      method,
      headers,
    }
  )

  return fetch(request)
    .then((res, err) => res.json())
}
