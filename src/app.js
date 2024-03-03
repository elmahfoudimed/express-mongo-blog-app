const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');
const MongoDBStore = require('connect-mongodb-session')(session);

require('dotenv').config();

const app = express();
const port = process.env.PORT;
const uri = process.env.MONGODB_URI;

mongoose
    .connect(uri)
    .then(() => console.log('Connected to database'))
    .catch((error) => console.log(`ERROR: ${error.message}`));

app.use(express.json());

const sessionStore = new MongoDBStore({
    uri: uri,
    collection: 'sessions'
});

app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    store: sessionStore,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24
    }
}));

require('./config/passport');
app.use(passport.initialize());
app.use(passport.session());

app.use(userRoutes);
app.use(postRoutes);

app.listen(port, () => console.log(`Server running on port ${port}`));