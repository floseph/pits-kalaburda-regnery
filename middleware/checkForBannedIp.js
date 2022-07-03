const fs = require('fs')

function checkForBannedIps(req, res, next){
  
  const ip = req.ip
  const bannedIps = JSON.parse(fs.readFileSync(`${__dirname}/../json/bannedIps.json`))

  if(bannedIps.includes(ip)){
    res.status(403)
    res.sendFile('honeypot.html', {root: 'views'})
  }else{
    next()
  }

}

module.exports = checkForBannedIps