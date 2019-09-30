// Simple Node API
// Implementation of a simple API using Node and Express
// M Allen - 2019

const express = require('express')
const app = express()

const data = {
  name: 'John Smith',
  position: 'Manager',
  location: 'Oxford',
  telephone: '01865 123456',
  email: 'jsmith@someaddress.co.uk'
}

app.get('/', (req, res) => {
  res.json(data)
})

app.listen(3000, () => {
  console.log('Simple Node API started - listening on port: 3000')
})
