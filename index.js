const express = require('express')
const app = express()
const port = process.env.PORT || 3000;




app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended : false}))


app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/img', express.static(__dirname + 'public/img'))


const checkForBannedIps = require('./middleware/checkForBannedIp')
app.use(checkForBannedIps)
// MIDDLEWARE
const rateLimit = require('./middleware/rateLimit')
const checkMaliciousUserAgent = require('./middleware/checkMaliciousUserAgent')

// ROUTES
const rootRoutes = require('./routes/rootRoutes')
const registerRoutes = require('./routes/registerRoutes')
const impressumRoutes = require('./routes/impressumRoutes')
const aboutRoutes = require('./routes/aboutRoutes')
const versandinfoRoutes = require('./routes/versandinfoRoutes')
const faqRoutes = require('./routes/faqRoutes')
const helpRoutes = require('./routes/helpRoutes')
const honeypotRoutes = require('./routes/honeypotRoutes')




// USING MIDDLEWARE
app.use(rateLimit.dailyLimiter)
app.use('/register', rateLimit.registerLimiter)

app.use(checkMaliciousUserAgent)

// USING ROUTES
app.use('/', rootRoutes)
app.use('/register', registerRoutes)
app.use('/impressum', impressumRoutes)
app.use('/about', aboutRoutes)
app.use('/versandinfo', versandinfoRoutes)
app.use('/faq', faqRoutes)
app.use('/help', helpRoutes)
// app.use('/superAwesomeSubpage', honeypotRoutes)


// starting server
app.listen(port, () => {
  console.log(`Listening on Port ${port}`)
})