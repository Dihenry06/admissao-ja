const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGO_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(success => {
    console.log('MongoDB Online');
}).catch(error => {
    console.log(error);
});