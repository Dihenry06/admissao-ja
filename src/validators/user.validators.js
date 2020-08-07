const { celebrate, Segments, Joi } = require('celebrate');

const validatorCreateUser = celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required().min(3),
        email: Joi.string().required().email(),
        password: Joi.string().required().min(6)
    })
});

module.exports = { validatorCreateUser }
