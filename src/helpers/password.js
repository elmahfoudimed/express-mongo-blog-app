const bcrypt = require('bcrypt');

const validatePassword = async (password, hash) => {
    return await bcrypt.compare(password, hash);
};

const hash = async (password) => {
    return await bcrypt.hash(password, 10);
};

module.exports = { validatePassword, hash };