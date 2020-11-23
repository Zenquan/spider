const fs = require('fs');
const { resolve } = require('../util/index');

class MovieCtl {
  index (ctx){
    const movie = fs.readFileSync(resolve('/public/movie/movie.txt'));
    const tmpMovie = JSON.parse(movie);
    ctx.status = 200;
    ctx.body = {
      "ret": "200",
      "data": JSON.parse(tmpMovie),
      "msg": "success"
    };
  }
};

module.exports = new MovieCtl();