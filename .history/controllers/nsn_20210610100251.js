/* eslint-disable import/prefer-default-export */
import { response } from 'express'
import models from '../models'

const getAllNsns = async (request, reponse) => {
  const allNsns = await models.Nsns.findAll({
    attributes: ['NIIN', 'NAME', 'ITEM_NUMBER'] })

  return response.send(allNsns)
}
