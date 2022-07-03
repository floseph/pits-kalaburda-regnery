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
const impressumRoutes = require('./routes/impressumRoutes')
const aboutRoutes = require('./routes/aboutRoutes')
const versandinfoRoutes = require('./routes/versandinfoRoutes')
const faqRoutes = require('./routes/faqRoutes')
const helpRoutes = require('./routes/helpRoutes')




// USING MIDDLEWARE

// USING ROUTES
app.use('/', rootRoutes)
app.use('/impressum', impressumRoutes)
app.use('/about', aboutRoutes)
app.use('/versandinfo', versandinfoRoutes)
app.use('/faq', faqRoutes)
app.use('/help', helpRoutes)


// starting server
app.listen(port, () => {
  console.log(`Listening on Port ${port}`)
})