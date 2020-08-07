const routes = require('express').Router();
const LogonController = require('../controllers/logon.controller');

const validatorsLogon = require('../validators/logon.validators');

routes.post('/', validatorsLogon, LogonController.login);

module.exports = routes