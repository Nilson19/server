require('dotenv').config();
module.exports = {
  development: {
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASS,
    database: process.env.DATABASE_DB,
    host: process.env.DATABASE_HOST,
    dialect: "postgres",
    dialectOptions: {
      ssl: process.env.DATABASE_SSL
    }
  },
  test: {
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASS,
    database: process.env.DATABASE_DB,
    host: process.env.DATABASE_HOST,
    dialect: "postgres",
    dialectOptions: {
      ssl: process.env.DATABASE_SSL
    }
  },
  production: {
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASS,
    database: process.env.DATABASE_DB,
    host: process.env.DATABASE_HOST,
    dialect: "postgres",
    dialectOptions: {
      ssl: process.env.DATABASE_SSL
    }
  }
};
