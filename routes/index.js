const router = require('koa-router')()

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
