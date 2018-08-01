const checkUser = {
    // 已经登录了
    checkNotLogin: (ctx) => {
        if (ctx.session && ctx.session.user) {
            // ctx.redirect('/posts');
            return false;
        }
        return true;
    },
    //没有登录
    checkLogin: (ctx) => {
        if (!ctx.session || !ctx.session.user) {
            ctx.body = {
                msg: '查询失败',
                status: 401,
                message: '未登录'
            }
            return false;
        }
        return true;
    }
}

module.exports = checkUser