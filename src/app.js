const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const requireDir = require('require-dir');

require('./databases/connection');
requireDir('./models');

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
app.use('/api', require('./routes'));

module.exports = app;