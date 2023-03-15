<<<<<<< HEAD
require('dotenv').config();

module.exports ={
  "development": {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DE_HOST,
    dialect: "postgres",
   
  },
  "test": {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: "postgres"
  },
  "production": {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: "postgres"
=======
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
>>>>>>> bb1ed37405f4ae2dc74d9200352cef780c323d9b
  }
}
