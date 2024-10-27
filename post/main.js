const express = require('express')
const app = express()
const port = 3000
const blog = require('./routes/blog')

app.use(express.static('public'))
app.use('/blog', blog)

app.get('/', (req, res) => {
  console.log('This is get request');

  res.send('Hello World get!')
}).post('/', (req, res) => {
  console.log('This is post request');

  res.send('Hello World post!')
}).put('/', (req, res) => {
  console.log('This is put request');
  res.send('Hello World put!')
}).get('/index', (req, res) => {
  console.log('This is index request');
  // res.send('Hello World index!')
  res.sendFile(`templete/index.html`, { root: __dirname })

}).get('/api', (req, res) => {
    res.json({a:1,b:2,c:3,d:4,name:['a','b','c']})

})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})


