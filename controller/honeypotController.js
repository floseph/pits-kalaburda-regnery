const fs = require('fs')
const database = require('../model/database')


const honeypotGet = (req, res) => {

  const ipToBeBanned = req.ip
  // const bannedIps = JSON.parse(fs.readFileSync(`${__dirname}/../json/bannedIps.json`))

  // bannedIps.push(ipToBeBanned)

  // fs.writeFileSync(`${__dirname}/../json/bannedIps.json`, JSON.stringify(bannedIps, null, 2))

  database.addIp(ipToBeBanned)


  res.sendFile('honeypot.html', {root: 'views'})
}

module.exports = {honeypotGet}