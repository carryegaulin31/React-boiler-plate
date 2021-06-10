'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('`nsn_flis_parts', {
      id: { type: Sequelize.IN(16) UNSIGNED NOT NULL,
      `NIIN` bigint(9) UNSIGNED NOT NULL,
      `PART_NUMBER` varchar(32) NOT NULL,
      `UNPUNCTUATED` varchar(64) NOT NULL,
      `CAGE_CODE` char(5) NOT NULL,
      `RNCC` set('1','2','3','4','5','6','7','8','A','C','D','E') NOT NULL,
      `RNVC` set('1','2','3','8','9') NOT NULL,
      `DAC` set('1','2','3','4','5','6','9','A','B','C','D','E','F','G','H','U','X') NOT NULL,
      `RNAAC` char(2) NOT NULL,
      `STATUS` char(1) NOT NULL,
      `MSDS` char(5) NOT NULL,
      `SADC` char(2) NOT NULL,
      `FSC` int(5) NOT NULL,
      `PUBLICATION_DATE` varchar(10) NOT NULL
    ) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='V_FLIS_PART';

    CREATE TABLE `nsn` (
      `NIIN` int(9) UNSIGNED NOT NULL,
      `NAME` varchar(80) NOT NULL,
      `INC` int(5) UNSIGNED ZEROFILL NOT NULL,
      `FSC` mediumint(4) NOT NULL,
      `FSG` tinyint(2) NOT NULL,
      `COUNTRY_CODE` int(2) NOT NULL,
      `ITEM_NUMBER` int(3) NOT NULL,
      `PUBLICATION_DATE` varchar(10) NOT NULL
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
