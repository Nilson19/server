require('dotenv').config()
module.exports = {
  development: {
    host: process.env.DATABASE_HOST,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASS,
    database: process.env.DATABASE_DB,
    dialect: "postgres",
    dialectOptions: {
      ssl: process.env.DATABASE_SSL
    }
  },
  test: {
    host: process.env.DATABASE_HOST,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASS,
    database: process.env.DATABASE_DB,
    dialect: "postgres",
    dialectOptions: {
      ssl: process.env.DATABASE_SSL
    }
  },
  production: {
    host: process.env.DATABASE_HOST,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASS,
    database: process.env.DATABASE_DB,
    dialect: "postgres",
    dialectOptions: {
      ssl: process.env.DATABASE_SSL
    }
  }
};
