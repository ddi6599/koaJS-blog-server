module.exports ={
    // 已经登录了
    checkLogin: (ctx) => {
        if (ctx.session && ctx.session.user) {
            ctx.body = {
                msg: '已登录',
                status: 200
            }
            return false;
        }
        return true;
    },
    //没有登录
    checkNotLogin: (ctx) => {
        if (!ctx.session || !ctx.session.user) {
            ctx.body = {
                msg: '未登录',
                status: 401
            };
            return false;
        }
        return true;
    }
}
