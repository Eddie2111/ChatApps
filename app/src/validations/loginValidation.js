export async function LoginValidation(email, password) {
  const errors = {};
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  // password regex rules: 1 uppercase, 1 lowercase, 1 number, 1 special character, min 8 characters
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[\w@$!%*?&]{8,}$/;

  if (!emailRegex.test(email)) {
    errors.email = "Email must be a valid email address.";
  }
  if (!passwordRegex.test(password)) {
    errors.password =
      "Password must contain 1 uppercase, 1 lowercase, 1 number, 1 special character, min 8 characters";
  }

  return {
    errors,
    valid: Object.keys(errors).length < 1,
  };
}
