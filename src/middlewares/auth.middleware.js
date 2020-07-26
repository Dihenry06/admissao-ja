const jwt = require('jsonwebtoken');
const auth = require('../config/jwt/auth.json');

module.exports = (req, res, next) => {
    const authToken = req.headers.token;

    if (!authToken) {
        return res.status(401).json({ error: 'No token provided' });
    }

    const parts = authToken.split(' ');

    if (!(parts.length === 2)) {
        return res.status(401).json({ error: 'Token error' });
    }

    const [scheme, token] = parts;

    if (!/^Bearer$/i.test(scheme)) {
        return res.status(401).json({ error: 'Token malformatted.' });
    }

    jwt.verify(token, auth.secret, (err, decoded) => {
        if (err) {
            return res.status(401).json({ error: 'Token invalid' });
        }

        req.userId = decoded.id;
        return next();
    });
}