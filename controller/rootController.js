const rootGet = (req, res) => {
  res.render('index', {root: 'views/html'})
}

module.exports = {rootGet}