const { IPAdress } = require('../util/os'); 

module.exports = {
  host: `${IPAdress}:4000`,
  staticPath: '/public',
  APIPORT: 4000,
  STATICPORT: 5000
};