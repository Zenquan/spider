const child_process = require( 'child_process');
const fs = require('fs');
const { topstory } = require( '../constant/curl/zhihu');
const { resolve } = require('../util');

const __main__ = () => {
  child_process.exec(topstory, (err, stdout, stderr) => {
    let arr = JSON.stringify(stdout)
    
    fs.writeFileSync(resolve('/public/zhihu/topstory.json'), arr)
  });
};

__main__();