/* eslint-disable import/prefer-default-export */
import models from '../models'

const getAllParts = async (request, response) => {
  const allParts = await models.NsnFlisPartsModel.find({
    attributes: ['NIIN', 'PART_NUMBER', 'CAGE_CODE'],
  })

  return allParts
    ? response.send(allParts)
    : response.sendStatus(404)
}
module.exports = getAllParts
