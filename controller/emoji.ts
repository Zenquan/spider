import fs from 'fs';
import config from '../constant/config';
import Context from 'koa'

const { host, staticPath  } = config

class EmojiCtl {
  index (ctx: Context & {
    status: number,
    body: {
      "ret": string,
      "data": Array<string>,
      "msg": string
    }
  }){
    const imgs = fs.readdirSync(`./${staticPath}/img`)
    let result = imgs.map(img => `${host}/img/${img}`),
      body = {
        "ret": "200",
        "data": result,
        "msg": "success"
      };
    ctx.status = 200;
    ctx.body = body;
  }
}

export default new EmojiCtl();