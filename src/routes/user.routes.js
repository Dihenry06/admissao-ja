const routes = require('express').Router();
const UserController = require('../controllers/user.controller');

routes.post('/', UserController.create);

module.exports = routes