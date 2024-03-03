const User = require('../models/User');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const { validatePassword } = require('../helpers/password');

const verify = async (username, password, done) => {
    const user = await User.findOne({ username: username });
    if (!user) return done(null, false);

    const match = await validatePassword(password, user.password);
    if (match) return done(null, user);
    else return done(null, false);
};

const strategy = new LocalStrategy(verify);

passport.use(strategy);

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((userId, done) => {
    User.findById(userId)
        .then((user) => {
            done(null, user);
        })
        .catch(err => done(err))
});

passport.use(strategy);