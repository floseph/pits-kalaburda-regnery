const rootGet = (req, res) => {
  res.sendFile('index.html', {root: 'views'})
}

module.exports = {rootGet}