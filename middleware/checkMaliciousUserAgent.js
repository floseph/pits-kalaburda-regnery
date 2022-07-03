const fs = require('fs')

function checkMaliciousUserAgent(req, res, next){
  
  const userAgent = req.get('User-Agent')
  const bannedUserAgents = JSON.parse(fs.readFileSync(`${__dirname}/../json/bannedUserAgents.json`))

  if(bannedUserAgents.includes(userAgent)){
    res.status(403)
    res.sendFile('honeypot.html', {root: 'views'})
  }else{
    next()
  }

}

module.exports = checkMaliciousUserAgent

// credit: https://github.com/mitchellkrogza/nginx-ultimate-bad-bot-blocker/blob/master/_generator_lists/bad-user-agents.list