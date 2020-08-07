const routes = require('express').Router();
const UserController = require('../controllers/user.controller');

const userMiddlewares = require('../middlewares/users.middlewares');

const validatorsUser = require('../validators/user.validators');

routes.post('/', validatorsUser.validatorCreateUser, userMiddlewares.userExists, UserController.create);

module.exports = routes;