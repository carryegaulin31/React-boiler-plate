import models from '../models'

// eslint-disable-next-line import/prefer-default-export
export const getAllParts = async (request, response) => {
  const allParts = await models.N.findAll({
    attributes: ['NIIN', 'NAME', 'ITEM_NUMBER'],
  })

  return response.send(allParts)
}