const Nsn = (connection, Sequelize) => {
  return connection.define('nsns', {
  NIIN: { type: Sequelize.INTEGER(9), allowUnsigned: false, allowNull: false },
  NAME: { type: Sequelize.STRING(80), allowNull: false },
  INC: { type: Sequelize.INTEGER(5), allowUnsigned: false, allowNull: false },
  FSC: { type: Sequelize.MEDIUMINT(4), allowNull: false },
  FSG: { type: Sequelize.TINYINT(2), allowNull: false },
  COUNTRY_CODE: { type: Sequelize.INTEGER(2), allowNull: false },
  ITEM_NUMBER: { type: Sequelize.INTEGER(3), allowNull: false },
  PUBLICATION_DATE: Sequelize.STRING(10),
  allowNull: false,
})
}

module exports 
