import userValidationSchema from "../validationSchema/userValidationSchema.js";

export function registerUserValidation(req, res, next) {

  const { error, value } = userValidationSchema.validate(req.body, {
    abortEarly: false,
    stripUnknown: true,
  });

  if (error) {
    const errorMessage = error.details
      .map((detail) => detail.message)
      .join(", ");
    return res.status(400).json({ error: errorMessage });
  }

  if (value.age && !value.birth_date) {
    const today = new Date();
    const birthYear = today.getFullYear() - value.age;
    const birthDate = new Date(birthYear, today.getMonth(), today.getDate());
    value.birth_date = birthDate.toISOString().split("T")[0]; 
    delete value.age; 
  }

  if (value.birth_date && value.birth_date instanceof Date) {
    value.birth_date = value.birth_date.toISOString().split("T")[0];
  }

  req.body = value;
  next();
}
