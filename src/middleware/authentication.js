const { body, validationResult } = require('express-validator');

const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
        return res.status(400).json({ errors: errors.array() });
    next();
};

const validateRegistration = () => [
    body('username').trim().isLength({ min: 5 }),
    body('password').trim().isLength({ min: 8 }),
    validate
];

const isAuthenticated = (req, res, next) => {
    if (req.isAuthenticated())
        next();
    else
        res.send('Please login to access the requested resource!');
};

module.exports = { validateRegistration, isAuthenticated };
