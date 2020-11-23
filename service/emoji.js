const child_process = require( 'child_process');
const async = require( "async");
const path = require( 'path');
const { downloadImage, resolve } = require( '../util/index');
const config = require( '../constant/config');
const emoji = require( '../constant/curl/emoji');

const { staticPath  } = config;
const { curl, baseurl } = emoji;

const __main__ = () => {
  let result = []
  child_process.exec(curl, (err, stdout, stderr) => {
    let arr = JSON.parse(stdout)
    
    arr.forEach(out => {
      result.push({
        title: `${out.path.split('/')[1]}`,
        url: `${baseurl}${out.path}`
      });
    });

    async.mapSeries(result, (item, callback) => {
      setTimeout(() => {
        const imgDir = resolve(staticPath),
          destImage = `${imgDir}/img/${item.title}.jpg`
        downloadImage(item.url, destImage, (err, data) => {
          err ? console.log(err) : console.log(path.resolve(data));
        });
        callback && callback(null, item);
      }, 100);
    });
  });
};

__main__();
