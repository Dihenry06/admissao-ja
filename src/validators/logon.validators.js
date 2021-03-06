const { celebrate, Segments, Joi } = require('celebrate');

const validatorLogonUser = celebrate({
  [Segments.BODY]: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(6),
  }),
});

module.exports = validatorLogonUser;
