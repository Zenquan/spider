const request = require("request");
const fs = require( "fs");
const path = require( 'path');
const KoaRouter = require('koa-router');
const child_process = require( 'child_process');
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
const dayjs = require('dayjs');

const downloadImage = (
    src, 
    dest, 
    callback
  ) => {
  request.head(src, (err, res, body) => {
    if (err) {
      console.log(err);
      return;
    }
    src &&
      request(src)
        .pipe(fs.createWriteStream(dest))
        .on("close", () => {
          callback && callback(null, dest);
        });
  });
};

const resolve = (pathname) => {
  return path.join(__dirname, '..', pathname);
};

const router = new KoaRouter();

const getSuffix = (str) => str.slice(str.lastIndexOf("."));

const exec = (curl, fn) => {
  child_process.exec(curl, fn);
}

const clusterFn = (fn) => {
  if (cluster.isMaster) {
    console.log(`主进程 ${process.pid} 正在运行`);
  
    // 衍生工作进程。
    for (let i = 0; i < numCPUs; i++) {
      cluster.fork();
    }
  
    cluster.on('exit', (worker, code, signal) => {
      console.log(`工作进程 ${worker.process.pid} 已退出`);
    });
  } else {
    fn && fn()
  }
}

const generNowTime = () => {
  return `${dayjs(Date.now()).format('YYYY-MM-DD')}`
}

const mkDir = (dirName) => {
  let isExsits = fs.existsSync(resolve(dirName));
  isExsits ? () => {} : fs.mkdirSync(resolve(dirName));
}

const writeDataFile = (path, data) => {
  fs.writeFileSync(resolve(path), JSON.stringify(data));
}

module.exports = {
  downloadImage,
  getSuffix,
  resolve,
  router,
  exec,
  clusterFn,
  generNowTime,
  mkDir,
  writeDataFile
};