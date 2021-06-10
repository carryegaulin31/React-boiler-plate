import { response } from 'express'
import models from '../models'

export const getAllNsns = async (request, reponse) => {
    const nsns = await models.Nsns.findAll()

    resturn response.send(nsns)
}