const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended : false}))


app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/img', express.static(__dirname + 'public/img'))

// MIDDLEWARE

// ROUTES
const rootRoutes = require('./routes/rootRoutes')
// USING MIDDLEWARE

// USING ROUTES
app.use('/', rootRoutes)

// starting server
app.listen(port, () => {
  console.log(`Listening on Port ${port}`)
})