import Joi from "joi";

const userValidationSchema = Joi.object({
  name: Joi.string().min(4).max(100).required(),
  email: Joi.string().email().required(),
  birth_date: Joi.alternatives()
    .try(
      Joi.date().iso().less('now'), 
      Joi.number().integer().min(1).max(150)
    )
    .required()
});

export default userValidationSchema;
