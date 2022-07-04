module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      "todonotes",
      {
        id: {
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
          type: Sequelize.INTEGER,
        },
        title: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        detail: Sequelize.STRING,
        isCompleted: {
          allowNull: false,
          defaultValue: false,
          type: Sequelize.BOOLEAN,
        },
        type: Sequelize.ENUM("todo", "note"),
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: Sequelize.fn("now"),
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: Sequelize.fn("now"),
        },
        deletedAt: Sequelize.DATE,
      },
      {
        paranoid: true,
      }
    );

    await queryInterface.addIndex("todonotes", ["type"]);
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable("todonotes");
    await queryInterface.dropEnum("enum_todonotes_type");
  },
};
