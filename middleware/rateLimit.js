const rateLimit = require('express-rate-limit')

const registerLimiter = rateLimit({
  windowMs: 60000, // 1min
  max: 10,
  standardHeaders: true,
  legacyHeaders: false
})

const dailyLimiter = rateLimit({
  windowMs: 60000*60*24,
  max: 5000
})

const honeyPotLimiter = rateLimit({
  windowMs : 60000*60*24,
  max : 1
})

module.exports = {registerLimiter, dailyLimiter, honeyPotLimiter}