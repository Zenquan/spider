const fs = require('fs');
const { host, staticPath  } = require('../constant/config');

class EmojiCtl {
  index (ctx){
    const imgs = fs.readdirSync(`./${staticPath}/img`);
    let result = imgs.map(img => `${host}/img/${img}`),
      body = {
        "ret": "200",
        "data": result,
        "msg": "success"
      };
    ctx.status = 200;
    ctx.body = body;
  }
};

module.exports = new EmojiCtl();