const NsnFlisParts = (connection, Sequelize) => connection.define('nsn_flis_parts', {
  id: {
    type: Sequelize.INTEGER(16), autoIncrement: false, allowUnsigned: false, allowNull: false, primaryKey: true,
  },
  NIIN: { type: Sequelize.BIGINT(9), allowUnsigned: false, allowNull: false },
  PART_NUMBER: { type: Sequelize.STRING(32), allowNull: false },
  UNPUNCTUATED: { type: Sequelize.STRING(64), allowNull: false },
  CAGE_CODE: { type: Sequelize.STRING(5), allowNull: false },
  RNCC: { type: Sequelize.STRING('1', '2', '3', '4', '5', '6', '7', '8', 'A', 'C', 'D', 'E'), allowNull: false },
  RNVC: { type: Sequelize.STRING('1', '2', '3', '8', '9'), allowNull: false },
  // eslint-disable-next-line max-len
  DAC: { type: Sequelize.ENUM('1', '2', '3', '4', '5', '6', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'U', 'X'), allowNull: false },
  RNAAC: { type: Sequelize.STRING(2), allowNull: false },
  STATUS: { type: Sequelize.STRING(1), allowNull: false },
  MSDS: { type: Sequelize.STRING(5) },
  SADC: { type: Sequelize.STRING(2) },
  FSC: { type: Sequelize.INTEGER(5), allowNull: false },
  PUBLICATION_DATE: { type: Sequelize.STRING(10), allowNull: false },
})

module.exports = NsnFlisParts
