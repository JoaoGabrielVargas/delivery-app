const emailValidation = (email) => {
  const regex = /\S+@\S+\.\S+/;
  return regex.test(email);
};

const passwordValidation = (password) => {
  const SIX = 6;
  return password.length >= SIX;
};

export { emailValidation, passwordValidation };
