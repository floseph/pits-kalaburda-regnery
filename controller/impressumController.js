const impressumGet = (req, res) => {
  res.sendFile('impressum.html', {root: 'views'})
}

module.exports = {impressumGet}