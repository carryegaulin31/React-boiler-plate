import models from '../models'

export const getAllNsns = async (_req, res) => {
  const allNsns = await models.Nsns.findAll({
    attributes: ['NIIN', 'NAME', 'ITEM_NUMBER'],
  })

  return allNsns
}

module.exports = { getAllNsns }
