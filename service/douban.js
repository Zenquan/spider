const fs = require('fs');
const { movie } = require( '../constant/curl/douban');
const { resolve, exec, generNowTime } = require('../util');

const __main__ = () => {
  exec(movie, (err, stdout, stderr) => {
    let arr = JSON.stringify(stdout)
    
    fs.writeFileSync(resolve(`/public/douban/movie_${generNowTime()}.txt`), arr)
  });
};

__main__();