import {config} from 'dotenv';
config({path: `${__dirname}/.env`});

import koa from 'koa';
import serve from 'koa-static';
import Router from 'koa-router';
import UnsplashCommunicator from './UnsplashCommunicator';
import { STATIC_PATH } from './Constants';

const port = process.env.PORT ? Number(process.env.PORT) : 3000;

let AMOUNT_OF_SLIDER_IMAGES = 20;
let AMOUNT_OF_PRODUCT_IMAGES = 28;

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

app.use(serve(STATIC_PATH));

router.get('/get-slider-images', async (ctx) => {
  try {
    const images = await unsplashCommunicator.fetchViewImages(AMOUNT_OF_SLIDER_IMAGES);
    ctx.body = { status: 'success', data: images };
  } catch (error) {
    ctx.body = { status: 'error', message: error.message };
  }
});

router.get('/get-product-images', async (ctx) => {
  try {
    const images = await unsplashCommunicator.fetchProductImages(AMOUNT_OF_PRODUCT_IMAGES);
    ctx.body = { status: 'success', data: images };
  } catch (error) {
    ctx.body = { status: 'error', message: error.message };
  }
});

app.use(router.routes());

app.listen(port, () => {
  console.log(`listening on port: ${port}`);
});
