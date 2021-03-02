const fs = require('fs');
const { host, staticPath  } = require('../constant/config');

class EmojiCtl {
  searchJson (ctx){
    let page = ctx.request.query.page;
    const size = 18;
    const imgs = fs.readdirSync(`./${staticPath}/img/emoji`);
    let result = imgs.map((img, index) => `http://${host}/img/emoji/${img}`),
      body = {
        "ret": "200",
        "data": page ? result.slice((page - 1) * size, page * size) : result,
        "msg": "success"
      };
    ctx.status = 200;
    ctx.body = body;
  }
};

module.exports = new EmojiCtl();