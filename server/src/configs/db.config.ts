import "dotenv/config";
import joi from "joi";
import { Options } from "sequelize";

const schema = joi.object({
  DB_HOST: joi.string().required(),
  DB_NAME: joi.string().required(),
  DB_USERNAME: joi.string().required(),
  DB_PASSWORD: joi.string().required(),
  DB_PORT: joi.number().integer().default(5432),
  DB_TIMEZONE: joi.string().default("Asia/Jakarta"),
});

const { error, value: envVar } = schema.validate(process.env, {
  stripUnknown: true,
});
if (error) {
  throw new Error(`Database config validation error: ${error.message}`);
}

export const dbConfig: Options = {
  host: envVar.DB_HOST,
  database: envVar.DB_NAME,
  username: envVar.DB_USERNAME,
  password: envVar.DB_PASSWORD,
  port: envVar.DB_PORT,
  timezone: envVar.DB_TIMEZONE,
  dialect: "postgres",
  logging: false,
};
