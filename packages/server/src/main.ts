import koa from 'koa';
import serve from 'koa-static';
import path from "path";

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;
const staticPath = path.join(__dirname, '..', 'frontend');

const app = new koa();

app.use(serve(staticPath));

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
