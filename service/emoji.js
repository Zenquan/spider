const async = require( "async");
const path = require( 'path');
const { downloadImage, resolve, exec, clusterFn } = require( '../util');
const config = require( '../constant/config');
const emoji = require( '../constant/curl/emoji');

const { staticPath  } = config;
const { searchJson, imgBaseurl } = emoji;

const __main__ = () => {
  let result = []
  const fn = () => {
    exec(searchJson, (err, stdout, stderr) => {
      let arr = JSON.parse(stdout)
      
      arr.forEach(out => {
        result.push({
          title: `${out.path.split('/')[1]}`,
          url: `${imgBaseurl}${out.path}`
        });
      });

      async.mapSeries(result, (item, callback) => {
        setTimeout(() => {
          const imgDir = resolve(staticPath),
            destImage = `${imgDir}/img/${item.title}.jpg`
          downloadImage({
            url: item.url
          }, destImage, (err, data) => {
            err ? console.log(err) : console.log(path.resolve(data));
          });
          callback && callback(null, item);
        }, 100);
      });
    });
  };

  clusterFn(fn);
};

__main__();
