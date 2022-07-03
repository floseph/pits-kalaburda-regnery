const bcrypt = require('bcrypt')
const database = require('../model/database')

const registerGet = (req, res) => {
  res.sendFile('register.html', {root: 'views'})
}

const registerPost = async (req, res) => {

  try {

    const firstName = req.body.firstName.toLowerCase()
    const lastName = req.body.lastName.toLowerCase()
    const email = (req.body.email).toLowerCase()
    const hashedPassword = await bcrypt.hash(req.body.password, 10)

    database.addUser(
      firstName,
      lastName,
      email,
      hashedPassword
    )

    res.redirect('/')
  } catch {
    res.redirect('/register')
  }
}


module.exports = {registerGet, registerPost}