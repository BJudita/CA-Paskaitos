import joi from "joi";

const itemIdSchema = joi.object({
    id: joi.number().integer().positive().required(),
});

export function validateItemId(req, res, next) {
const {error} = itemIdSchema.validate(req.params);
if (error) {
    res.status(400).json({message: error.message})
} else {
    next();
}
}