var router = require('koa-router')();

router.get('/', function *(next) {
  yield this.render('index', {
    title: 'Hello World Koa!'
  });
});

router.get('/fooo', function *(next) {
  yield this.render('index', {
    title: 'Hello World foo!'
  });
});

module.exports = router;
