import koa from 'koa';
import serve from 'koa-static';
import Router from 'koa-router';
import path from 'path';
import UnsplashCommunicator from './UnsplashCommunicator';
import dotenv from 'dotenv';
dotenv.config();

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;
const staticPath = path.join(__dirname, '..', 'frontend');

const app = new koa();
const router = new Router();
const unsplashCommunicator = new UnsplashCommunicator();

if (process.env.LOCAL_FRONTEND_URL) {
  app.use(async (ctx, next) => {
    ctx.set('Access-Control-Allow-Origin', process.env.LOCAL_FRONTEND_URL);
    ctx.set('Access-Control-Allow-Methods', 'GET, POST');
    ctx.set('Access-Control-Allow-Headers', 'Content-Type');
    await next();
  });
}

app.use(serve(staticPath));

router.get('/get-slider-images', async (ctx) => {
  try {
    const images = await unsplashCommunicator.fetchViewImages();
    ctx.body = { status: 'success', data: images };
  } catch (error) {
    ctx.body = { status: 'error', message: error.message };
  }
});

router.get('/get-product-images', async (ctx) => {
  try {
    const images = await unsplashCommunicator.fetchProductImages();
    ctx.body = { status: 'success', data: images };
  } catch (error) {
    ctx.body = { status: 'error', message: error.message };
  }
});

app.use(router.routes());

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
