const routes = require('express').Router();

const userRoutes = require('./routes/user.routes');
const logonRoutes = require('./routes/logon.routes');

routes.use('/user', userRoutes);
routes.use('/login', logonRoutes);
routes.get('/', (req, res) => {
  return res.sendStatus(200);
});

module.exports = routes;
