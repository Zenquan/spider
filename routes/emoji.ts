import KoaRouter from 'koa-router';
import emojiCtl from '../controller/emoji';

const router = new KoaRouter()

router.get('/emoji', emojiCtl.index)

export default router