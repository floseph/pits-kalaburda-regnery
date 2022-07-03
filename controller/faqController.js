const faqGet = (req, res) => {
  res.sendFile('faq.html', {root: 'views'})
}

module.exports = {faqGet}