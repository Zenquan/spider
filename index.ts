import Koa from "koa";
const path = require('path');
const KoaBody = require('koa-body');
const KoaStatic = require('koa-static');
const { staticPath, APIPORT } = require('./constant/config');
const routing = require('./routes/index')

const app = new Koa();

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