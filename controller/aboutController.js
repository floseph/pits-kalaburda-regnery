const aboutGet = (req, res) => {
  res.sendFile('about.html', {root: 'views'})
}

module.exports = {aboutGet}