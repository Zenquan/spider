const { movie } = require('../controller/douban');
const { router } = require('../util')

router.get('/douban/movie', movie);

module.exports = router;