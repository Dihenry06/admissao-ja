const mongoose = require('mongoose');
const UserSchema = mongoose.model('User');

async function userExists(req, res, next) {
    const { email } = req.body;
    try {
        const userExist = await UserSchema.findOne({ email });

        if (userExist) return res.status(400).json({ message: 'Email ja cadastrado' });

        return next();
    } catch (error) {
        return res.status(500).json({ message: 'Falha ao cadastrar usuario' });
    }

}
module.exports = { userExists }