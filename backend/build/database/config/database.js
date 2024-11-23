"use strict";
require("dotenv/config");
const { DB_USER, DB_PASS, DB_NAME, DB_HOST } = process.env;
const config = {
    username: DB_USER || "root",
    password: DB_PASS || "password",
    database: DB_NAME || "taxi_db",
    host: DB_HOST || "127.0.0.1",
    dialect: "mysql"
};
module.exports = config;
