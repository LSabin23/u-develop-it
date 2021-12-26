require('dotenv').config()
const mysql = require('mysql2')

// Connect to database
const db = mysql.createConnection(
  {
    // dotenv protected values
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: 'election'
  }
)

module.exports = db
