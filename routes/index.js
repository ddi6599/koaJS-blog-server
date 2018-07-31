const router = require('koa-router')()
router.get('/', function (ctx, next) {
    ctx.body = '<div style="text-align: center;font-size: 30px;padding: 20px;">Hello,My mini blog</div>'
});
router.get('/user/:id', function (ctx, next) {
    ctx.body = {
        msg: '查询成功',
        status: 200,
        data:{
            id: ctx.params.id,
            name: '张三DDD',
            age: '24'
        }
      }
});

module.exports = router
