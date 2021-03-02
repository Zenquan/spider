const fs = require('fs');
const { resolve, generNowTime } = require('../util');

class PixivCtl {
  topIllust (ctx){
    const movie = fs.readFileSync(resolve(`/public/pixiv/topIllust_${generNowTime()}.json`));
    const tmpMovie = JSON.parse(movie);
    ctx.status = 200;
    ctx.body = {
      "ret": "200",
      "data": JSON.parse(tmpMovie),
      "msg": "success"
    };
  }
};

module.exports = new PixivCtl();