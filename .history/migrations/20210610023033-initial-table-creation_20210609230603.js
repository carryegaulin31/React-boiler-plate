'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('nsn_flis_parts', {
      id: { type: Sequelize.INTEGER(16), autoIncrement: false, allowUnsigned: false, allowNull: false },
      NIIN: { type: Sequelize.BIGINT(9), allowUnsigned: false, allowNull: false }, 
      PART_NUMBER: { type: Sequelize.STRING(32), allowNull: false },
      UNPUNCTUATED: { type:Sequelize.STRING(64), allowNull: false },
      CAGE_CODE: { type: Sequelize.STRING(5), allowNull: false },
      RNCC: { type: Sequelize.SET('1','2','3','4','5','6','7','8','A','C','D','E'), allowNull: false },
      RNVC: { type: Sequelize.SET('1','2','3','8','9') , allowNull: false },
      DAC: { type: Sequelize.SET('1','2','3','4','5','6','9','A','B','C','D','E','F','G','H','U','X'), allowNull: false },
      RNAAC: { type: Sequelize.STRING(2) , allowNull: false },
      STATUS:{ type: Sequelize.STRING(1) , allowNull: false },
      MSDS: { type: Sequelize.STRING(5) , allowNull: false },
      SADC: { type: Sequelize.STRING(2) , allowNull: false },
      FSC: { type: Sequelize.INTEGER(5) , allowNull: false },
      PUBLICATION_DATE: { type: Sequelize.STRING(10), allowNull: false },
    })

    return queryInterface.createTable('nsn', {
      NIIN: { type: Sequelize.INTEGER(9), allowUnsigned: false, allowNull: false },
      NAME: { type: Sequelize.STRING(80), allowNull: false },
      INC:  { type: Sequelize.INTEGER(5), allowUnsigned: false, allowNull: false },
      FSC: { type: Sequelize.MEDIUMINT(4) , allowNull: false },
      FSG:  { type: Sequelize.TINYINT(2) , allowNull: false },
      COUNTRY_CODE: { type} int(2) , allowNull: false },
      ITEM_NUMBER int(3) , allowNull: false },
      PUBLICATION_DATE Sequelize.STRING(10) , allowNull: false }
    ) ENGINE=MyISAM DEFAULT CHARSET=latin1 COMMENT='P_FLIS_NSN';
    
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
