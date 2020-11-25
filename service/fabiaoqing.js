const fs = require('fs');
const request = require('request');
const cheerio = require('cheerio');
const { resolve, exec, generNowTime } = require('../util');

const __main__ = () => {
  request.get('https://www.fabiaoqing.com/bqb/lists', (error, response, body) => {
    const $ = cheerio.load(body);
    console.log('data>>>', $('div["class=ui segment"]').html());
  })
};

__main__();