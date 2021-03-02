const async = require( "async");
const path = require( 'path');

const { downloadImage, exec, clusterFn, writeDataFile, generNowTime, mkDir, resolve} = require( '../util');
const config = require( '../constant/config');
const pixiv = require( '../constant/curl/pixiv');
const { existsSync } = require("fs");

const { staticPath  } = config;
const { topIllust, imgBaseurl } = pixiv;

const __main__ = () => {
  const fn = () => {
    exec(topIllust, (err, stdout, stderr) => {
      const res = JSON.parse(stdout)
      
      const { 
        body: {
          page: {pixivision, contestOngoing, contestResult},
          thumbnails: {illust, novel},
          boothItems,
          sketchLives
        }
      } = res
      
      // console.log('arr>>>', pixivision, contestOngoing, contestResult, illust, novel);
      const dirName = `/public/pixiv`;
      mkDir(dirName)
      writeDataFile(`${dirName}/topIllust_${generNowTime()}.json`, stdout);

      const pixivmgName = '/public/img/pixiv'
      mkDir(pixivmgName)
      const generResult = (data, type) => {
        let result = []
        data.forEach(out => {
          let arr = out[type].split('/'), len = arr.length;
          result.push({
            title: `${arr[len - 1]}`,
            url: `${out[type]}`
          });
        });

        return result
      }

      const fn = (result) => {
        async.mapSeries(result, (item, callback) => {
          const destImage = `${resolve(pixivmgName)}/${item.title}`;
          if (existsSync(destImage)) return;
          setTimeout(() => {
            downloadImage({
              url: item.url, 
              headers: {
                'referer': 'https://www.pixiv.net/'
              }
            }, destImage, (err, data) => {
              err ? console.log(err) : console.log(path.resolve(data));
            });
            callback && callback(null, item);
          }, 100);
        });
      };
      
      let pixivisionResult = generResult(pixivision, 'thumbnailUrl'), 
        boothItemsResult = generResult(boothItems, 'imageUrl'),
        sketchLivesResult = generResult(sketchLives, 'thumbnailUrl'),
        contestOngoingResult = generResult(contestOngoing, 'iconUrl'),
        contestResultResult = generResult(contestResult, 'iconUrl'),
        illustResult = generResult(illust, 'url'),
        novelResult = generResult(novel, 'url')
      fn(pixivisionResult)
      fn(boothItemsResult)
      fn(sketchLivesResult)
      fn(contestOngoingResult),
      fn(contestResultResult)
      fn(illustResult)
      fn(novelResult)
    });
  };

  fn()
  // clusterFn(fn);
};

__main__();
