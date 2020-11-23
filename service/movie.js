const child_process = require( 'child_process');
const fs = require('fs');
const movie = require( '../constant/curl/movie');

const __main__ = () => {
  child_process.exec(movie, (err, stdout, stderr) => {
    let arr = JSON.stringify(stdout)
    
    fs.writeFileSync('../public/movie/movie.txt', arr)
  });
};

__main__();