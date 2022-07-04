import { Sequelize } from "sequelize-typescript";
import { dbConfig } from "./configs";

export const sequelize = new Sequelize({
  ...dbConfig,
  models: [__dirname + "/models/**/*.model.ts"],
  modelMatch: (filename, member) => {
    return (
      filename.substring(0, filename.indexOf(".model")) === member.toLowerCase()
    );
  },
});
