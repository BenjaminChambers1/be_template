module.exports = async knex => {
    console.log(`Checking if the table users exists in database.`);
    const users = 'DB_Users';
    const encode = require('./../encode');
    const exists = await knex.schema.hasTable(users);

    if (!exists) {
        console.log(`Creating table users in database.`);
        await knex.schema.createTable(users, (table) => {
            table.increments('id');
            table.string('username').notNullable();
            table.string('first_name').notNullable();
            table.string('last_name').notNullable();
            table.string('email').notNullable();
            table.string('password').notNullable();
            table.timestamp('createdAt').defaultTo(knex.fn.now());
            table.timestamp('updatedAt').defaultTo(knex.fn.now());
        });

        await knex(users).insert({
            username: 'chambersb',
            first_name: 'Benjamin',
            last_name: 'Chambers',
            email: 'befchambers@gmail.com',
            password: encode.encode('ben1202')
        });
    }
    //await knex.schema.dropTable(users)
}