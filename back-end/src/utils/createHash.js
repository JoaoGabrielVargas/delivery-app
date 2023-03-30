const md5 = require('md5');

const createHash = (password) => {
const newHash = md5(password);
return newHash;
};

module.exports = createHash;