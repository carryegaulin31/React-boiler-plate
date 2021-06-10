import models from '../models'

const getAllNsns = async (req, response) => {
  const allNsns = await models.Nsns.findAll({
    attributes: ['NIIN', 'NAME', 'ITEM_NUMBER'],
  })

  return allNsns
}

module.exports = { getAllNsns }
