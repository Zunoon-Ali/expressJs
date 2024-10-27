const express = require('express')
const app = express()
const port = 3000
const fs = require('fs')

app.use(express.static('public'))

app.use((req, res, next)=> {
    console.log(req.headers);
    req.zunoon = 'hello I am Zunoon'
    
        fs.appendFileSync('log.txt',`${Date.now()} and method is ${req.method}\n`)
    console.log(`${Date.now()} and method is ${req.method}`)
    next()
  })
app.use((req, res, next)=> {
    console.log('LOGGED In'+ req.zunoon)
    next()
  })
app.use((req, res, next)=> {
    console.log('LOGGED Out')
    next()
  })
  

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})