"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert(
      "todoLists",
      [
        {
          name: "Matias Work List",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Matias Personal List",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Leo's futbol list",
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("todoLists", null, {});
  }
};
