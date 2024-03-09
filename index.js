require('dotenv').config()
const express = require('express')
const app = express()
const port = 1200

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login', (req, res) => {
    res.send('Please Login!')
  })

  app.get('/product', (req, res) => {
    res.send('Product Page!')
  })

  app.get('/home', (req, res) => {
    res.send('Home Page')
  })

  app.get('/logout', (req, res) => {
    res.send('Logout here!')
  })

  app.get('/cart', (req, res) => {
    res.send('Cart is open !')
  })

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})