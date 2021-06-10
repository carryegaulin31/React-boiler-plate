/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import Sequelize from 'sequelize'
import allConfigs from '../config/sequelize'
import NsnModel from './nsns'
import NsnFlisPartsModel from './nsn_flis_parts'

const environment = process.env.NODE_ENV ? process.env.NODE_ENV : 'development'
const config = allConfigs[environment]

const connection = new Sequelize(config.database, config.username, config.password, {
  host: config.host, dialect: config.dialect,
})

const 