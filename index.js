// Simple Node API
// Implementation of a simple API using Node and Express
// M Allen - 2019

const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.json(data)
})

// Port allocation and default for Heroku commit
let port = process.env.port
if (port === null || port === '') {
  port = 4000
}
app.listen(port, () => {
  console.log(`Simple Node API started - listening on port: ${port}`)
})

const data = {
  employees: [
    {
      firstName: 'John',
      lastName: 'Smith',
      office: 'Oxford',
      position: 'Office Manager',
      Telephone: '01865 123456',
      email: 'jsmith@someaddress.co.uk'
    },
    {
      firstName: 'Jane',
      lastName: 'Doe',
      office: 'Oxford',
      position: 'Developer',
      Telephone: '01865 123465',
      email: 'jdoe@someaddress.co.uk'
    },
    {
      firstName: 'Erica',
      lastName: 'Blaine',
      office: 'Southampton',
      position: 'Office Manager',
      Telephone: '02381 123456',
      email: 'eblaine@someaddress.co.uk'
    },
    {
      firstName: 'Rebecca',
      lastName: 'Thomas',
      office: 'Southampton',
      position: 'Developer',
      Telephone: '02381 123465',
      email: 'rthomas@someaddress.co.uk'
    },
    {
      firstName: 'Amir',
      lastName: 'Khan',
      office: 'Southampton',
      position: 'Developer',
      Telephone: '02381 123466',
      email: 'akhan@someaddress.co.uk'
    },
    {
      firstName: 'Emanuel',
      lastName: 'James',
      office: 'Southampton',
      position: 'Office Junior',
      Telephone: '02381 123467',
      email: 'ejames@someaddress.co.uk'
    }
  ],
  offices: [
    {
      Oxford: {
        Building: 'Hargrave House',
        Number: '123',
        Street: 'Halliwell Road',
        Postcode: 'OX1 1AA'
      },
      Southampton: {
        Building: 'Regis Chambers',
        Number: 'Unit 7',
        Street: 'Causewell Street',
        Postcode: 'SO3 2BA'
      }
    }
  ]
}
