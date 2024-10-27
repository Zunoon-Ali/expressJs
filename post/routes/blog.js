const express = require('express')
const router = express.Router()


// define the home page route
router.get('/', (req, res) => {
  res.send('Blogs home page')
})
// define the home page route
router.get('/blogpost/:slug', (req, res) => {
  res.send(`This is Blog Post Slug is ${req.params.slug} `)
})
// define the about route
router.get('/about', (req, res) => {
  res.send('About Blogs')
})




module.exports = router