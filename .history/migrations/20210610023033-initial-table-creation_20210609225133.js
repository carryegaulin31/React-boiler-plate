'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('nsn_flis_parts', {
      id: { type: Sequelize.INTEGER(16), autoIncrement: false, allowUnsigned: false, allowNull: false },
      NIIN: { type: Sequelize.BIGINT(9), allowUnsigned: false, allowNull: false }, 
      PART_NUMBER: { type: Sequelize.STRING(32),allowNull: false }
      UNPUNCTUATED varchar(64), allowNull: false },
      CAGE_CODE char(5),allowNull: false }
      RNCC set('1','2','3','4','5','6','7','8','A','C','D','E'), allowNull: false }
      RNVC set('1','2','3','8','9') ,
      DAC set('1','2','3','4','5','6','9','A','B','C','D','E','F','G','H','U','X'), allowNull: false }
      RNAAC char(2) ,
      STATUS char(1) ,
      MSDS char(5) ,
      SADC char(2) ,
      FSC int(5) ,
      PUBLICATION_DATE varchar(10) 
    ) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='V_FLIS_PART';

    CREATE TABLE nsn (
      NIIN int(9) UNSIGNED ,
      NAME varchar(80) ,
      INC int(5) UNSIGNED ZEROFILL ,
      FSC mediumint(4) ,
      FSG tinyint(2) ,
      COUNTRY_CODE int(2) ,
      ITEM_NUMBER int(3) ,
      PUBLICATION_DATE varchar(10) 
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
