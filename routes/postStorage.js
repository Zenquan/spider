const { postLocalStorage } = require('../controller/postStorage');
const { router } = require('../util')

router.post('/postStorage/ls', postLocalStorage);

module.exports = router;