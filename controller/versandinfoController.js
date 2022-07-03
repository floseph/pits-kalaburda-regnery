const versandinfoGet = (req, res) => {
  res.sendFile('versandinfo.html', {root: 'views'})
}

module.exports = {versandinfoGet}