const routes = require('express').Router();
const LogonController = require('../controllers/logon.controller');

routes.post('/', LogonController.login);

module.exports = routes