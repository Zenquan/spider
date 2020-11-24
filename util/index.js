const request = require("request");
const fs = require( "fs");
const path = require( 'path');
const KoaRouter = require('koa-router');

const downloadImage = (
    src, 
    dest, 
    callback
  ) => {
  request.head(src, (err, res, body) => {
    if (err) {
      console.log(err);
      return;
    }
    src &&
      request(src)
        .pipe(fs.createWriteStream(dest))
        .on("close", () => {
          callback && callback(null, dest);
        });
  });
};

const resolve = (pathname) => {
  return path.join(__dirname, '..', pathname);
};

const router = new KoaRouter();

const getSuffix = (str) => str.slice(str.lastIndexOf("."));

module.exports = {
  downloadImage,
  getSuffix,
  resolve,
  router
};