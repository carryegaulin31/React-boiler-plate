import models from '../models'

// eslint-disable-next-line import/prefer-default-export
export const getAllParts = async (request, response) => {
  const allParts = await models.Nsn_flis_parts.findAll({
    attributes: ['id', 'NIIN', '_NUMBER'],
  })

  return response.send(allParts)
}