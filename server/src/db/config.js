const { dbConfig } = require("../configs");

const storage = {
  migrationStorage: "sequelize",
  seederStorage: "sequelize",
};

const sequelizeConfig = {
  local: { ...dbConfig, ...storage },
  development: { ...dbConfig, ...storage },
};

module.exports = sequelizeConfig;
