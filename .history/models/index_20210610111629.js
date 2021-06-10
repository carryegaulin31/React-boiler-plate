/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import Sequelize from 'sequelize'
// import allConfigs from '../config/sequelize'
import NsnModel from './nsns'
import NsnFlisPartsModel from './nsn_flis_parts'



const Nsns = NsnModel(connection, Sequelize)
const NsnFlisParts = NsnFlisPartsModel(connection, Sequelize)

export default {
  Nsns,
  NsnFlisParts,
  Sequelize,
}
