import { fetchNsns, fetchNsnAndPartss } from '../actions/nsn'

export const getNsnNameFromUrl = location => (location && location.pathname
  ? location.pathname.split('/nsn/').pop()
  : ''
)
export const filterNsns = (list, term) => list.filter(nsn => nsn..toLowerCase().includes(term.toLowerCase()))

export const retrieveColors = async () => {
  const colors = await fetchColors()

  return colors
}

export const retrieveColorWithAssociatedFlowers = async (location) => {
  const colorName = getColorNameFromUrl(location)

  if (!colorName) return { details: {}, flowers: [] }

  const { id, name, flowers } = await fetchColorAndFlowers(colorName)

  if (!id || !name || !flowers) return { details: {}, flowers: [] }

  return { flowers, details: { id, name } }
}