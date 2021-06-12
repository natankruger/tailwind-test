const domain = 'http://localhost:3000'

const api = async (path) => {
  let response = await fetch(`${domain}/${path}`)
  return await response.json()
}

export { api }
