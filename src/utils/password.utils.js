const bcrypt = require('bcrypt');

async function passwordCript(password) {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    return hash;
}

async function comparePassword(password, dbPassword) {
    const response = bcrypt.compareSync(password, dbPassword);

    return response;
}


module.exports = { passwordCript, comparePassword }