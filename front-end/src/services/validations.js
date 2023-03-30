const emailValidation = (email) => {
  const regex = /\S+@\S+\.\S+/;
  return regex.test(email);
};

const passwordValidation = (password) => {
  const SIX = 6;
  return password.length >= SIX;
};

const nameValidation = (name) => {
  const TWELVE = 12;
  return name.length >= TWELVE;
};

export { emailValidation, passwordValidation, nameValidation };
