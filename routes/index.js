const router = require('koa-router')()
const articlesApi = require('../controllers/article')
const checkUser = require('../middlewares/checkUser')

router.get('/api/articles', articlesApi.getArticles);
router.get('/', function (ctx, next) {
    ctx.body = {
        msg: '查询成功',
        status: 200,
        data:{
            info: 'Welcome to my mini blog API'
        }
    }
});
router.get('/user/:id',checkUser, function (ctx, next) {
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
