const routes = require('express').Router();
const UserController = require('../controllers/user.controller');

const userMiddlewares = require('../middlewares/users.middlewares');

routes.post('/', userMiddlewares.userExists, UserController.create);

module.exports = routes;