const fs = require('fs');
const request = require('request');
const cheerio = require('cheerio');
const config = require( '../constant/curl/ixigua');
const { resolve, exec, generNowTime, writeDataFile } = require('../util');

const __main__ = () => {
  request.get(config.index, (error, response, body) => {
    const $ = cheerio.load(body);

    exec(config.index, (err, stdout, stderr) => { 
      writeDataFile(`/public/ixigua/index_${generNowTime()}.html`, stdout);
    });

    console.log('data>>>', $());
  });
};

__main__();