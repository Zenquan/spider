const mysql = require('mysql2');
const {mysqlConfig} = require('../constant/config')

let config = {
  host: mysqlConfig.host.host,
  user: mysqlConfig.userName,
  password: mysqlConfig.passWord,
  database: mysqlConfig.dataBase,
  port: 3306,
  multipleStatements: true //允许多条sql同时执行
};

let pool = mysql.createPool(config);
let query = (sql, values) => {

  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        reject(err)
      } else {
        connection.query(sql, values, (err, rows) => {
          if (err) {
            reject(err)
          } else {
            resolve(rows)
          }
          connection.end()
        })
      }
    })
  })
};
module.exports = {
  query
}