import models from '../models'

// eslint-disable-next-line import/prefer-default-export
export const getAll = async (request, response) => {
  const allNsns = await models.Nsns.findAll({
    attributes: ['NIIN', 'NAME', 'ITEM_NUMBER'],
  })

  return response.send(allNsns)
}