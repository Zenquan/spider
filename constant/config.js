const { IPAdress } = require('../util/os'); 

module.exports = {
  host: `${IPAdress}:4000`,
  staticPath: '/public',
  APIPORT: 4000,
  STATICPORT: 5000,
  STMPCONFIG: {
    host: "smtp.sina.cn",
    secureConnection: true, 
    auth: {
      user: '15913969367@sina.cn', // generated ethereal user
      pass: 'f8a4182f9d2fe82e', // generated ethereal password
    },
  },
  EMAILCONFIG: {
    from: '"Zenquan" <15913969367@sina.cn>', // sender address
    to: "jomsou@qq.com", // list of receivers
    subject: "每天一言", // Subject line
    text: "👨: 春花秋月不及你~~", // plain text body
    html: `
      <div>
        <b>👨: 春花秋月不及你~~</b>
        <img src="https://tva1.sinaimg.cn/large/0081Kckwgy1gl0mwqlnxsj30c80c8jrs.jpg"/>
      </div>
    `, // html body
    // https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1752460159,226752426&fm=26&gp=0.jpg
  },
  connectionStr: 'mongodb://localhost/zhihu',
  mysqlConfig: {
    dataBase: 'zenshow', 
    userName: 'zenshow', 
    passWord: 'zen1847867150@qq.comquan', 
    host: {
      host: 'den1.mysql5.gear.host',
      dialect: 'mysql'
    }
  }
};