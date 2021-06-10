'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('nsn', [
   (`NIIN`, `NAME`, `INC`, `FSC`, `FSG`, `COUNTRY_CODE`, `ITEM_NUMBER`, `PUBLICATION_DATE`) VALUES
   
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
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
