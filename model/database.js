const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database('./data.db', sqlite3.OPEN_READWRITE, (err) => {
  if (err) return console.error(err);

  console.log("connected to db");
})

// db.run(
//   'CREATE TABLE users(user_id INTEGER PRIMARY KEY, first_name, last_name, email, password)'
// );

// db.run(
//   'DROP TABLE users'
// );



// db.run(
//   'DROP TABLE bannedips'
// )

// db.run(
//   'CREATE TABLE bannedips(ip_id INTEGER PRIMARY KEY, ip)'
// )

function addIp(ip){
  const sql = 'INSERT INTO bannedips(ip) VALUES (?)'

  db.run(sql, [`${ip}`], (err) => {
    if (err) return console.error(err);
  })
}

async function selectAllIps(){
  return new Promise((resolve, reject) => {

    const ips = []
    const sql = `SELECT * FROM bannedips `
    db.all(sql, [], (err, rows) => {
      if (err) return console.error(err);

      
      rows.forEach( (row) => {
        ips.push(row.ip)
      })
      
      resolve(ips)
      
    })
  })
}

function addUser(firstName, lastName, email, password){
  const sql = 'INSERT INTO users(first_name, last_name, email, password) VALUES (?,?,?,?)';

  db.run(sql, [`${firstName}`, `${lastName}`, `${email}`, `${password}`], (err) => {
    if (err) return console.error(err);
  });
}

async function findUserByEmail(email){
  return new Promise((resolve, reject) => {

    const usersFound = []
    const sql = `SELECT * FROM users WHERE email = '${email}'  `
    db.all(sql, [], (err, rows) => {
      if (err) return console.error(err);

      
      rows.forEach( (row) => {
        usersFound.push(row)
      })
      
      resolve(usersFound)
      
    })
  })
}

// const sql = `SELECT * FROM users`

// db.all(sql, [], (err, rows) => {
//   if (err) return console.error(err);

//   rows.forEach( (row) => {
//     console.log(row);
//   })
// })

const sql = `SELECT * FROM bannedips`

db.all(sql, [], (err, rows) => {
  if (err) return console.error(err);

  rows.forEach( (row) => {
    console.log(row);
    
  })
})
module.exports = {
  addUser,
  findUserByEmail,
  addIp,
  selectAllIps
}