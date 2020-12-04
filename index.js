const Koa = require('koa');
const path = require('path');
const KoaBody = require('koa-body');
const KoaStatic = require('koa-static');
const mongoose = require('mongoose')
const Sequelize = require('sequelize');
const config = require('./constant/config');
const routing = require('./routes');
const db = require('./model')

const app = new Koa();
const { staticPath, APIPORT, connectionStr, mysqlConfig } = config;

// 连接数据库
// mongoose.connect(connectionStr, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// }, () => {
//   console.log('数据库连接成功')
// })
// .catch(err => {
//   console.log(err)
// })

// mongoose.connection.on(error, console.error)

// const sequelize = new Sequelize(
//   mysqlConfig.dataBase, 
//   mysqlConfig.userName, 
//   mysqlConfig.passWord, 
//   mysqlConfig.host  
// );

// console.log('>>>', sequelize);

db.query(`SELECT * FROM users`, ['ice@wedn.net'])
  .then(res => {
    console.log('res>>>', res);
  })

app.use(KoaBody({
  multipart: true,
  formidable: {
    uploadDir: path.join(__dirname, staticPath),
    keepExtensions: true
  }
}))

app.use(KoaStatic(
  path.join(__dirname, staticPath)
))

routing(app)
app.listen(APIPORT, () => {
  console.log(`Running at http://localhost:${APIPORT}`);
});