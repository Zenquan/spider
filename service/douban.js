const child_process = require( 'child_process');
const fs = require('fs');
const { movie } = require( '../constant/curl/douban');
const { resolve } = require('../util');

const __main__ = () => {
  child_process.exec(movie, (err, stdout, stderr) => {
    let arr = JSON.stringify(stdout)
    
    fs.writeFileSync(resolve('/public/douban/movie.txt'), arr)
  });
};

__main__();