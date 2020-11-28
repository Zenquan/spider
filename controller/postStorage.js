const fs = require('fs');
const { resolve, generNowTime, mkDir, writeDataFile } = require('../util');
class PostStorageCtl {
  /**
   * 需要制定一下上传的数据规则
   * @param {*} ctx 
   */
  postLocalStorage (ctx){
    const body = ctx.request.body;
    ctx.status = 200;
    const dirName = `/public/postStorage`;
    mkDir(dirName)
    writeDataFile(`${dirName}/${generNowTime()}.json`, body);
    ctx.body = {
      "ret": "200",
      "data": body,
      "msg": "success"
    };
  }
};

module.exports = new PostStorageCtl();