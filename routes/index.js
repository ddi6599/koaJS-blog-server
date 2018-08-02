const router = require('koa-router')()
const articlesApi = require('../controllers/article')
const userApi = require('../controllers/user')

router.get('/', function (ctx, next) {
    ctx.body = {
        msg: '查询成功',
        status: 200,
        data:{
            info: 'Welcome to my mini blog API'
        }
    }
});
router.get('/articles', articlesApi.getArticles);
router.get('/user/:id', userApi.getUserInfo);
router.get('/login', userApi.login);
router.get('/loginOut', userApi.loginOut);

module.exports = router
