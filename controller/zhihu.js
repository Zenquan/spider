const fs = require('fs');
const { resolve, generNowTime } = require('../util');

class ZhihuCtl {
  topstory (ctx){
    const zhihu = fs.readFileSync(resolve(`/public/zhihu/topstory_${generNowTime()}.json`));
    const tmpzhihu = JSON.parse(zhihu);
    ctx.status = 200;
    ctx.body = {
      "ret": "200",
      "data": JSON.parse(tmpzhihu),
      "msg": "success"
    };
  }
};

module.exports = new ZhihuCtl();