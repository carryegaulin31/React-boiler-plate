import axios from 'axios'

export default async (NIIN) => {
  const { data } = await axios.get(`${API_BASE_URL}/nsn/${NIIN}`) // eslint-disable-line no-undef

  return data
}