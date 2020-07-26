const routes = require('express').Router();

const userRoutes = require('./routes/user.routes');
const logonRoutes = require('./routes/logon.routes');

routes.use('/user', userRoutes);
routes.use('/login', logonRoutes);

module.exports = routes