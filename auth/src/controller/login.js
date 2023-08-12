const { validateLoginInput } = require('../validators/loginValidators');
const { findUserByEmail } = require('../model/userModel');
const { compare } = require('bcrypt');
const { sign } = require('jsonwebtoken');

async function login(req, res) {
    const { email, password } = req.body;
    const validationErrors = validateLoginInput(email, password);
    if (validationErrors.length > 0) {
        return res.status(400).json({ errors: validationErrors });
    }
    const user = await findUserByEmail(email);
    if (!user) {
        return res.status(400).json({ errors: ['User does not exist.'] });
    }
    const passwordMatch = await compare(password, user.password);
    if (!passwordMatch) {
        return res.status(400).json({ errors: ['Invalid password.'] });
    }
    const token = sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1d' });
    return res.status(200).json({ token: token });
}

module.exports = {
    login,
}