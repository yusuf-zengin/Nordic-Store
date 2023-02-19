const Koa = require('koa');
const serve = require('koa-static');
const path = require('path');

const app = new Koa();
const staticPath = './build'; // React projesinin build klasörü

app.use(serve(path.join(__dirname, staticPath)));

app.listen(3000, () => {
  console.log(`Server started on port 3000`);
});
