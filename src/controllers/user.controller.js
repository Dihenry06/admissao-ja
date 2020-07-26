const mongoose = require('mongoose');
const UserSchema = mongoose.model('User');

const passwordUtils = require('../utils/password.utils');

async function create(req, res) {
    const { name, email, password } = req.body;

    try {
        const hash = await passwordUtils.passwordCript(password);

        const response = await UserSchema.create({
            name,
            email,
            password: hash
        });

        if (!response) return res.status(400).json({ message: 'Falha ao cadastrar usuario' });

        return res.status(200).json({ message: 'Usuario cadastrado com sucesso' });

    } catch (error) {
        return res.status(500).json({ message: 'Falha ao cadastrar usuario' });
    }
}

module.exports = { create }