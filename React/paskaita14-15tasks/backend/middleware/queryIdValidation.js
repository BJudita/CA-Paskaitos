import joi from "joi";
import { validateMongoDbId } from "./common.js";

export function queryIdValidation(req, res, next) {
  const schema = joi.object({
    columnId: joi.string().custom(validateMongoDbId),
  });

  const { error } = schema.validate(req.query);

  if (error) {
    res.status(400).json({ message: error.details[0].message });
  } else {
    next();
  }
}