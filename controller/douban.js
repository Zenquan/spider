const fs = require('fs');
const { resolve } = require('../util');

class DoubanCtl {
  movie (ctx){
    const movie = fs.readFileSync(resolve('/public/douban/movie.txt'));
    const tmpMovie = JSON.parse(movie);
    ctx.status = 200;
    ctx.body = {
      "ret": "200",
      "data": JSON.parse(tmpMovie),
      "msg": "success"
    };
  }
};

module.exports = new DoubanCtl();