const check = require('../middlewares/checkUser')
const getUserInfo = async ctx => {
    let res = await check.checkNotLogin(ctx)
    if(res) {
        ctx.body = {
            msg: '查询成功',
            status: 200,
            data: {
                id: ctx.params.id,
                name: '张三DDD',
                age: '24'
            }
        }
    }
}
const login = async ctx => {
    let res = await check.checkLogin(ctx)
    if(res) {
        ctx.session = {
            user: ctx.params.id + Math.random().toString(36).substr(2)
        }
        ctx.body = {
            msg: '登录成功',
            status: 200,
            token: 'secret_sferwvdvdsvds_20180910121'
        }
    }

}
module.exports = {
    getUserInfo,
    login
}