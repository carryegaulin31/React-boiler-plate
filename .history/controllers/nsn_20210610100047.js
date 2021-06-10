/* eslint-disable import/prefer-default-export */
import { response } from 'express'
import models from '../models'

const getAllNsns = async (request, reponse) => {
  const allnsns = await models.Nsns.findAll()

  return response.send(nsns)
}
