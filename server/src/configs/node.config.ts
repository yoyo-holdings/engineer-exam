import "dotenv/config";
import joi from "joi";

const schema = joi.object({
  NODE_ENV: joi
    .string()
    .valid("local", "test", "development", "staging", "production"),
});

const { error, value: envVar } = schema.validate(process.env, {
  stripUnknown: true,
});
if (error) {
  throw new Error(`Node config validation error: ${error.message}`);
}

export const nodeConfig = {
  env: envVar.NODE_ENV,
};
