const {v4: uuidv4} = require('uuid');

function validateSignupInput(name, email, password) {
  const errors = [];

  // Validate name
  if (
    !name ||
    typeof name !== 'string' ||
    name.length > 35 ||
    /\d/.test(name)
  ) {
    errors.push(
      'Name must be a string without numerics and up to 35 characters.'
    );
  }

  // Validate email
  if (
    !email ||
    typeof email !== 'string' ||
    email.length > 35 ||
    !isValidEmail(email)
  ) {
    errors.push('Email must be a valid string up to 35 characters.');
  }

  // Validate password
  if (
    !password ||
    typeof password !== 'string' ||
    password.length < 6 ||
    password.length > 32
  ) {
    errors.push('Password must be a string with 6 to 32 characters.');
  }

  return errors;
}

function isValidEmail(email) {
  // Basic email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Example usage
const name = 'John Doe';
const email = 'john.doe@example.com';
const password = 'mysecretpassword';

const validationErrors = validateSignupInput(name, email, password);

if (validationErrors.length === 0) {
  const userId = uuidv4();
  // Proceed with signup process
} else {
  console.error('Validation errors:', validationErrors);
}

module.exports = {
  validateSignupInput,
};
