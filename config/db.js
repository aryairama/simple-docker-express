require('dotenv').config();

module.exports = {
  development: {
    username: process.env.MYSQL_ROOT_USERNAME,
    password: process.env.MYSQL_ROOT_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_LOCAL_PORT,
    dialect: process.env.DATABASE_DIALECT,
  },
  test: {
    username: process.env.MYSQL_ROOT_USERNAME,
    password: process.env.MYSQL_ROOT_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_LOCAL_PORT,
    dialect: process.env.DATABASE_DIALECT,
  },
  production: {
    username: process.env.MYSQL_ROOT_USERNAME,
    password: process.env.MYSQL_ROOT_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_LOCAL_PORT,
    dialect: process.env.DATABASE_DIALECT,
  },
};
