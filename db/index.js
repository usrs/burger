const mysql = require('mysql2')

module.exports = mysql.createConnection(process.env.JAWSDB_URL || process.env.LOCAL_URL)