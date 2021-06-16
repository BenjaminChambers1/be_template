//const LocalStrategy = require('passport-local').Stratagy;

const initialise = async (passport, username, password) => {
    const passport = require('passport');
    const JWTstrategy = require('passport-jwt').Strategy;
    const ExtractJWT = require('passport-jwt').ExtractJwt;

    const roles = [
    'HOST',
    'ADMIN'
    ];

    //This verifies that the token sent by the user is valid
    passport.use(new JWTstrategy({
    secretOrKey: process.env.JWT_SECRET,
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken()
    }, async (token, done) => done(null, token.user)));
}

module.exports = initialise;



