const fs = require('fs')
const database = require('../model/database')

async function checkForBannedIps(req, res, next){
  
  const ip = req.ip
  // const bannedIps = JSON.parse(fs.readFileSync(`${__dirname}/../json/bannedIps.json`))
  const bannedIps = await database.selectAllIps()

  if(bannedIps.includes(ip)){
    res.status(403)
    res.sendFile('honeypot.html', {root: 'views'})
  }else{
    next()
  }

}

module.exports = checkForBannedIps