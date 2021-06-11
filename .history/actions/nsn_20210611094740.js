import axios from 'axios'

export const fetchNsns = async () => {
  const { data } = await axios.get('http://localhost:1337/api/nsn')
    for (let index = 0; index < nsn.length; index++) {
        const element = nsn[index];
        
    }
  return data
}

export const fetchNsnAndParts = async () => {
  const { data } = await axios.get(`${API_BASE_URL}/nsn/${NIIN}`) // eslint-disable-line no-undef

  return data
}
