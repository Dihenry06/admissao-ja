const { celebrate, Segments, Joi } = require('celebrate');

// Regex password
// /^
//   (?=.*\d)              // deve conter ao menos um dígito
//   (?=.*[a-z])           // deve conter ao menos uma letra minúscula
//   (?=.*[A-Z])           // deve conter ao menos uma letra maiúscula
//   (?=.*[$*&@#])         // deve conter ao menos um caractere especial
//   [0-9a-zA-Z$*&@#]{8,}  // deve conter ao menos 8 dos caracteres mencionados
// $/

const validatorCreateUser = celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required().min(3).message('Nome muito pequeno'),
    email: Joi.string().required().email().message('E-mail inválido'),
    password: Joi.string()
      .required()
      .pattern(
        new RegExp(
          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/
        )
      )
      .message('Senha muito fraca'),
  }),
});

module.exports = { validatorCreateUser };
