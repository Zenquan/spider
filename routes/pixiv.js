const { topIllust } = require('../controller/pixiv');
const { router } = require('../util')

router.get('/pixiv/topIllust', topIllust);

module.exports = router;