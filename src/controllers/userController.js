const User = require('../models/User');
const { hash } = require('../helpers/password');

const register = async (req, res, next) => {
    try {
        const user = req.body;

        user.password = hash(user.password);
        await User.create(user);

        return res.send('User created successfully');
    } catch (error) {
        next(error);
    }
};

const login = (req, res) => res.send('Login page');

const profile = (req, res) => {
    const fullname = req.user.fullname;
    res.send(`Welcome ${fullname}.`);
}

const logout = (req, res) => {
    req.logout((err) => {
        if (err)
            return next(err);
        res.redirect('/login');
    });
};

module.exports = { register, login, logout, profile };