require('dotenv').config()

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;
// const info = process.env

module.exports =
{
  "development": {
    "url": `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
    "dialect": "postgres",
    "logging": false

  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}