const NsnFlisParts = (connection, Sequelize) => connection.define('nsn_flis_parts', {
  id: {
    type: Sequelize.INTEGER(16), autoIncrement: false, allowUnsigned: false, allowNull: false, primaryKey: true,
  },
  NIIN: { type: Sequelize.BIGINT(9), allowUnsigned: false, allowNull: false },
  PART_NUMBER: { type: Sequelize.STRING(32), allowNull: false },
  UNPUNCTUATED: { type: Sequelize.STRING(64), allowNull: false },
  CAGE_CODE: { type: Sequelize.STRING(5), allowNull: false },
  RNCC: { type: Sequelize.set, allowNull: false },
  RNVC: { type: Sequelize.SET, allowNull: false },
  // eslint-disable-next-line max-len
  DAC: { type: Sequelize.SET, allowNull: false },
  RNAAC: { type: Sequelize.STRING(2), allowNull: false },
  STATUS: { type: Sequelize.STRING(1), allowNull: false },
  MSDS: { type: Sequelize.STRING(5) },
  SADC: { type: Sequelize.STRING(2) },
  FSC: { type: Sequelize.INTEGER(5), allowNull: false },
  PUBLICATION_DATE: { type: Sequelize.STRING(10), allowNull: false },
})

module.exports = NsnFlisParts
