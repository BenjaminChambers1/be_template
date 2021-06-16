// Update with your config settings.
module.exports = {
  production: {
    client: 'pg',
    connection: {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      database: process.env.DB_DATABASE,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: __dirname + '/src/migrations',
    },
    seeds: {
      directory: __dirname + '/src/seeds'
    }
  },
  development: {
    client: 'pg',
    connection: {
      host: '18.216.160.160',
      port: 5432,
      database: 'db_template',
      user:     'ben',
      password: 'Starlight1202'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: __dirname + '/src/migrations',
    },
    seeds: {
      directory: __dirname + '/src/seeds'
    }
  }
};
