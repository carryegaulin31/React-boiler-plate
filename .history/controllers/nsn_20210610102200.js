import { response } from 'express'
import models from '../models'

const getAllNsns = async (request, response) => {
  const allNsns = await models.Nsns.findAll({
    attributes: ['NIIN', 'NAME', 'ITEM_NUMBER'],
  })

  return allNsns
  ? return(allNsns)
}

module.exports = { getAllNsns }
