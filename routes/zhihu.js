const { topstory } = require('../controller/zhihu');
const { router } = require('../util')

router.get('/zhihu/topstory', topstory);

module.exports = router;