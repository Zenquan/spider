const { topIllust } = require('../controller/pixi');
const { router } = require('../util')

router.get('/pixi/topIllust', topIllust);

module.exports = router;