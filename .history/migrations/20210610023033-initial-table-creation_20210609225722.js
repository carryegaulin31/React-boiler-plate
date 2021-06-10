'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('nsn_flis_parts', {
      id: { type: Sequelize.INTEGER(16), autoIncrement: false, allowUnsigned: false, allowNull: false },
      NIIN: { type: Sequelize.BIGINT(9), allowUnsigned: false, allowNull: false }, 
      PART_NUMBER: { type: Sequelize.STRING(32),allowNull: false },
      UNPUNCTUATED: { type:Sequelize.STRING(64), allowNull: false },
      CAGE_CODE: { type: Sequelize.STRING(5),allowNull: false },
      RNCC: { type: Sequelize.SET('1','2','3','4','5','6','7','8','A','C','D','E'), allowNull: false },
      RNVC: { type: Sequelize.SET('1','2','3','8','9') , allowNull: false },
      DAC: { type: Sequelize.SET('1','2','3','4','5','6','9','A','B','C','D','E','F','G','H','U','X'), allowNull: false },
      RNAAC: { char(2) ,allowNull: false },
      STATUS:{  { char(1) ,allowNull: false },
      MSDS { char(5) ,allowNull: false },
      SADC { char(2) ,allowNull: false },
      FSC int(5) ,allowNull: false },
      PUBLICATION_DATE Sequelize.STRING(10) ,allowNull: false }
    ) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='V_FLIS_PART';

    CREATE TABLE nsn (
      NIIN int(9) UNSIGNED ,allowNull: false },
      NAME Sequelize.STRING(80) ,allowNull: false },
      INC int(5) UNSIGNED ZEROFILL ,allowNull: false },
      FSC mediumint(4) ,allowNull: false },
      FSG tinyint(2) ,allowNull: false },
      COUNTRY_CODE int(2) ,allowNull: false },
      ITEM_NUMBER int(3) ,allowNull: false },
      PUBLICATION_DATE Sequelize.STRING(10) ,allowNull: false }
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
