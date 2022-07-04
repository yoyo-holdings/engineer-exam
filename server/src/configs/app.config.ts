import "dotenv/config";
import joi from "joi";

const schema = joi.object({
  APP_PORT: joi.number().integer().default(8000),
  APP_WHITELIST: joi.string().required(),
});

const { error, value: envVar } = schema.validate(process.env, {
  stripUnknown: true,
});
if (error) {
  throw new Error(`App config validation error: ${error.message}`);
}

export const appConfig = {
  port: envVar.APP_PORT,
  whitelist: envVar.APP_WHITELIST,
};
