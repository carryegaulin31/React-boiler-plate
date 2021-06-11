import { fetchNsns, fetchNsnAndPartss } from '../actions/nsn'

export const getNsnNameFromUrl = location => (location && location.pathname
  ? location.pathname.split('/nsn/').pop()
  : ''
)
export const filterNsns = (list, term) => list.filter(nsn => nsn.NIIN.includes(term))

export const retrieveColors = async () => {
  const nsns = await fetchNsns()

  return nsns
}

export const retrieveNsnWithAssociatedParts = async (location) => {
  const nsnNIIN = getNsnNIINFromUrl(location)

  if (!nsnNIIN) return { details: {}, parts: [] }

  const { id, name, flowers } = await fetchColorAndFlowers(colorName)

  if (!id || !name || !flowers) return { details: {}, flowers: [] }

  return { flowers, details: { id, name } }
}
