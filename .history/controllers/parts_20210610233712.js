/* eslint-disable import/prefer-default-export */
import models from '../models'

export const getAllParts = async (request, response) => {
  const allParts = await models.NsnFlisPartsModel.findAll({
    attributes: ['id', 'NIIN', 'PART_NUMBER', 'UNPUNCTUATED', CAGE_CO],
  })

  return response.send(allParts)
}
