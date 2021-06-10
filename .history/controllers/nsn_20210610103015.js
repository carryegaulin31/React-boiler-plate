
import models from '../models'

// eslint-disable-next-line import/prefer-default-export
export const getAllNsns = async (req, res) => {
  const allNsns = await models.Nsns.findAll({
    attributes: ['NIIN', 'NAME', 'ITEM_NUMBER'],
  })

  return allNsns
}

module.exports = { getAllNsns }
