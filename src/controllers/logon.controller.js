const mongoose = require('mongoose');
const UserSchema = mongoose.model('User');

const jwt = require('jsonwebtoken');

const passwordUtils = require('../utils/password.utils');
const authConfig = require('../config/jwt/auth.json');

async function login(req, res) {
    const { email, password } = req.body;

    try {
        const user = await UserSchema.findOne({ email });

        if (!user) return res.status(401).json({ message: 'email ou senha invalidos' });

        const compare = await passwordUtils.comparePassword(password, user.password);

        if (!compare) return res.status(401).json({ message: 'email ou senha invalido' });

        const token = jwt.sign({ id: user.id }, authConfig.secret, {
            expiresIn: 1800, // 5 hours in seconds
        });

        return res.status(200).json(token);
        
    } catch (error) {
        return res.status(401).json({ message: 'Falha ao fazer o login' });
    }
}

module.exports = { login }