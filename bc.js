//Part of the login functionality, taken from my public repo https://github.com/YasinKuralay/TheCharacterForge/blob/master/bc.js
const bcrypt = require('bcryptjs');
let { genSalt, hash, compare } = bcrypt;
const { promisify } = require('util');

genSalt = promisify(genSalt);
hash = promisify(hash);
compare = promisify(compare);

module.exports.compare = compare;
module.exports.hash = (normalpw) =>
    genSalt().then((salt) => hash(normalpw, salt));
