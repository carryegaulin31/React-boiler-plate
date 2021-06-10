/* eslint-disable import/prefer-default-export */
import { response } from 'express'
import models from '../models'

const getAllNsns = async (request, reponse) => {
  const allnsns = await models.Nsns.findAll({
      attributes: []
  })

  return response.send(nsns)
}
