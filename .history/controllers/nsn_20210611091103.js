/* eslint-disable no-plusplus */
import models from '../models'

// eslint-disable-next-line import/prefer-default-export
export const getAllNsns = async (request, response) => {
  const allNsns = await models.Nsns.findAll({
    attributes: ['NIIN', 'NAME', 'ITEM_NUMBER'],
  })

  return response.send(allNsns)
}

const RandomNsns = (nsn) => {
  for (let i = 0; i < nsn.length; i++) {
    Math.floor(Math.random()[i])
    const option = nsn.NIIN[RandomNsns]
    console.log(RandomNsns)
    retur  }
}
