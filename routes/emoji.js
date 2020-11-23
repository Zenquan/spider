const KoaRouter = require('koa-router');
const { index } = require('../controller/emoji');

const router = new KoaRouter();
router.get('/emoji', index);

module.exports = router;