const Tesseract = require('tesseract.js');

Tesseract.recognize(
  // 'https://tesseract.projectnaptha.com/img/eng_bw.png',
  'https://tva1.sinaimg.cn/large/0081Kckwgy1gl0mwqlnxsj30c80c8jrs.jpg',
  'chi_tra',
  { logger: m => console.log(m) }
).then(({ data: { text } }) => {
  console.log(text);
})

// const tesseract = require('node-tesseract');
// const { resolve } = require('../util')

// // Recognize text of any language in any format
// tesseract.process(resolve('/public/img/test.jpg'),function(err, text) {
// 	if(err) {
// 		console.error(err);
// 	} else {
// 		console.log(text);
// 	}
// });