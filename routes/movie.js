const KoaRouter = require('koa-router');
const { index } = require('../controller/movie');

const router = new KoaRouter();
router.get('/movie', index);

module.exports = router;