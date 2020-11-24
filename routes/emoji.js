const { searchJson } = require('../controller/emoji');
const { router } = require('../util')

router.get('/emoji/searchJson', searchJson);

module.exports = router;