/* eslint-disable import/prefer-default-export */
import { response } from 'express'
import { Module } from 'webpack'
import models from '../models'

// eslint-disable-next-line no-unused-vars
const getAllNsns = async (request, reponse) => {
  const allNsns = await models.Nsns.findAll({ 
      attributes: ['NIIN', 'NAME', 'ITEM_NUMBER'] 
    })

    return allNsns
  ? return response.send(allNsns)
  : reponse.sendStatus(404)
}

module.exports = { getAllNsns }
