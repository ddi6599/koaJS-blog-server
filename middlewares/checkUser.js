const checkUser = (ctx) => {
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

module.exports = checkUser