const md5 = require('md5');

const verifyPassword = async (password, hashPassword) => {
const newHashPassword = md5(password);
return (newHashPassword === hashPassword);
};

module.exports = verifyPassword;