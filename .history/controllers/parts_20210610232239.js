import models from '../models'

// eslint-disable-next-line import/prefer-default-export
export const getAllParts = async (request, response) => {
  const allParts = await models.NsnFlisPartsModel.findAll({
    attributes: ['id', 'NIIN', 'PART_NUMBER'],
  })

  return response.send(allParts)
}