require('dotenv').config()
const mysql = require('mysql2')
const express = require('express')

const PORT = process.env.PORT || 3001
const app = express()

// Express middleware
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// Connect to database
const db = mysql.createConnection(
  {
    // dotenv protected values
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: 'election'
  },
  console.log('Connected to the election database.')
)

db.query('SELECT * FROM candidates', (err, rows) => {
  console.log(rows)
})

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end()
})

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`)
})
