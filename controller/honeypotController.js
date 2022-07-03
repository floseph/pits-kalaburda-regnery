const fs = require('fs')

const honeypotGet = (req, res) => {

  const ipToBeBanned = req.ip
  const bannedIps = JSON.parse(fs.readFileSync('./json/bannedIps.json'))

  bannedIps.push(ipToBeBanned)

  fs.writeFileSync('./json/bannedIps.json', JSON.stringify(bannedIps, null, 2))


  res.sendFile('honeypot.html', {root: 'views'})
}

module.exports = {honeypotGet}