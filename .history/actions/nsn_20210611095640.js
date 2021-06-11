import axios from 'axios'

export const fetchNsns = async () => {
  const { data } = await axios.get('http://localhost:1337/api/nsn')
  for (let i = 0; i < data.length; i++) {
    Math.floor(Math.random().nsn[i])
    const element = data[i]
    for (let e = 0; element.length <= 15; e++) return data(i)
  }
}
export const fetchNsnAndParts = async () => {
  const { data } = await axios.get(`${API_BASE_URL}/nsn/${NIIN}`) // eslint-disable-line no-undef

  return data
}
