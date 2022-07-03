const helpGet = (req, res) => {
  res.sendFile('help.html', {root: 'views'})
}

module.exports = {helpGet}