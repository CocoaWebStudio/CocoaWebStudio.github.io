import KoaRouter from 'koa-router'
import koaBody from 'koa-body'
import { postContactUs } from './contact-us'

const router = new KoaRouter()

router.post('/contact-us', koaBody(), async (ctx, next) => {
  await postContactUs(ctx, next)
})

export { router }
