import axios from 'axios'

export const fetchNsns = async () => {
  const { data } = await axios.get('http://localhost:1337/api/nsn')

  return data
}

export const fetchNsnAndParts = async (NIIN) => {
  const { data } = await axios.get(`${API_BASE_URL}/colors/${name}`) // eslint-disable-line no-undef

  return data
}