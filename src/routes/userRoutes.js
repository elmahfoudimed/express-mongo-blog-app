const router = require('express').Router();
const passport = require('passport');
const userController = require('../controllers/userController');
const { validateRegistration, isAuthenticated } = require('../middleware/authentication');

router.post('/register', validateRegistration(), userController.register);

router.route('/login')
    .post(passport.authenticate('local', { failureRedirect: '/login', successRedirect: '/profile' }))
    .get(userController.login);

router.get('/profile', isAuthenticated, userController.profile);

router.get('/logout', userController.logout);

module.exports = router;