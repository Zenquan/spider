const fs = require('fs');
const { topstory } = require( '../constant/curl/zhihu');
const { resolve, exec, generNowTime } = require('../util');

const __main__ = () => {
  exec(topstory, (err, stdout, stderr) => {
    let arr = JSON.stringify(stdout)
    
    fs.writeFileSync(resolve(`/public/zhihu/topstory_${generNowTime()}.json`), arr)
  });
};

__main__();