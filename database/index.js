module.exports = (knex) => {
    require('./users.js')(knex);
    return knex;
}

