const { movie } = require( '../constant/curl/douban');
const { exec, generNowTime, writeDataFile } = require('../util');

const __main__ = () => {
  exec(movie, (err, stdout, stderr) => { 
    writeDataFile(`/public/douban/movie_${generNowTime()}.txt`, stdout);
  });
};

__main__();