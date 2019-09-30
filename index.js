// Simple Node API
// Implementation of a simple API using Node and Express
// M Allen - 2019

const express = require('express')
const app = express()

app.listen(3000, () => {
  console.log('Simple Node API started - listening on port: 3000')
})
