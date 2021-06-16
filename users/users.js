let knex;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const log_in = async (req, res) => {
    const { username, password } = req.body;

    let found_user = await knex('DB_Users')
        .where({username})
        .limit(1);

    if (found_user.length > 0) {
        let correct_password = bcrypt.compare(found_user[0].password, password);
        if (!correct_password) {
            res.json({message: 'Password Incorrect for that username'});
        }
        let user = found_user[0];
        delete user.password;
        const access_token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
        return res.json({ access_token })
    }
    return res.json({message: 'User with that username doesnt exists'});
}

const sign_up = async (req, res) => {
    const { username, password } = req.body;
    
    let found_user = await knex('DB_Users')
        .select('username')
        .where({username})
        .limit(1);
    
    if (found_user.length > 0) {
        return res.json({message: 'User with that username already exists'});
    }
    await knex('DB_Users')
        .insert({
            username,
            password: await bcrypt.hash(password, 10),
            first_name: 'ben',
            last_name: 'chambers',
            email: 'ben@email.com',
        });
    return res.json({message: 'User was successfully created'});
}

const get_users = async (req, res) => {
    let found_users = await knex('DB_Users')
        .select('username')
    res.json(found_users);
}

module.exports = db => {
    knex = db;
    return {
        log_in,
        sign_up,
        get_users
    }
}