const { validateSignupInput } = require('../validators/signupValidator');
const { createAccount, findUserByEmail, findUserByName } = require('../model/userModel');
const { v4: uuidv4 } = require('uuid');
const { hash } = require('bcrypt');


async function signup(req, res) {
    const { name, email, password } = req.body;
    const validationErrors = validateSignupInput(name, email, password);
    if (validationErrors.length > 0) {
        return res.status(400).json({ errors: validationErrors });
    }
    const userExists = await findUserByEmail(email);
    if (userExists) {
        return res.status(400).json({ errors: ['User already exists.'] });
    }
    const hashedPassword = await hash(password, 10);
    const userId = uuidv4();
    
    await createAccount({ id: userId, name: name, email: email, password: hashedPassword })
    .then((user) => { console.log(user); })
    .catch((error) => { console.error(error); });

    return res.status(201).json({ message: 'User created successfully.' });
    }

module.exports = {
    signup,
}
