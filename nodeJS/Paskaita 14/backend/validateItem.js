import joi from "joi";

const itemSchema = joi.object({
    title: joi.string().min(5).max(30).required(),
});

export function validateItem(req, res, next) {
const {error} = itemSchema.validate(req.body);
if (error) {
    res.status(400).json({message: error.message})
} else {
    next();
}
}