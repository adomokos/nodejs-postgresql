require('dotenv').config();

const env = process.env;

const config = {
  db: { /* do not put password or any sensitive info here, done only for demo */
    host: env.POSTGRES_HOST,
    port: env.POSTGRES_PORT,
    user: env.POSTGRES_USER,
    password: env.POSTGRES_PASSWORD,
    database: env.POSTGRES_DB,
  },
};

module.exports = config;
