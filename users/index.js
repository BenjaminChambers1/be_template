const router = require('express').Router();
const { authenticate_token } = require('./auth.js');

module.exports = knex => {
    const users = require('./users.js')(knex);

    router.post('/log-in', users.log_in);
    router.post('/sign-up', users.sign_up);
    router.get('/get-users', authenticate_token, users.get_users);

    return router;
}