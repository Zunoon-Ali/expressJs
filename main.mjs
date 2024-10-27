// const express = require('express')
import express from "express"
const app = express()
const port = 3000

app.use(express.static('public'))
app.use(express.static('files'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/about', (req, res) => {
  res.send('Hello About!')
})
app.get('/contact', (req, res) => {
  res.send('Hello Contact!')
})
app.get('/blog', (req, res) => {
  res.send('Hello Blog!')
})
app.get('/blog/:slug', (req, res) => {
  console.log(req.params);
  console.log(req.query);
  
  res.send(`Hello ${req.params.slug}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})