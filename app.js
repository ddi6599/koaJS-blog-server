const Koa = require('koa')
const logger = require('koa-logger') // log4js更加强大
const session = require('koa-session-minimal')
const MysqlStore = require('koa-mysql-session')
const config = require('./config');
// const serve = require('koa-static') // 静态资源服务插件
const staticCache = require('koa-static-cache')
// 路径管理
const path = require('path')
// 请求体，返回体解析类似json，text，图片等
const bodyParser = require('koa-bodyparser')
// 允许跨域
const cors = require('@koa/cors')

const app = new Koa()
app.use(logger())
// session存储配置
const sessionMysqlConfig= new MysqlStore({
    user: config.database.USERNAME,
    password: config.database.PASSWORD,
    database: config.database.DATABASE,
    host: config.database.HOST,
})
// 存放sessionId的cookie配置
let cookieConfig = {
    maxAge: 30 * 60 * 1000, // cookie有效时长
    expires: '',  // cookie失效时间
    path: '', // 写cookie所在的路径
    domain: '', // 写cookie所在的域名
    httpOnly: '', // 是否只用于http请求中获取
    overwrite: '',  // 是否允许重写
    secure: '',
    sameSite: '',
    signed: ''
}
// 配置session中间件
app.use(session({
    key: 'SESSION_ID',
    store: sessionMysqlConfig,
    cookie: cookieConfig
}))
// 使用解析上下文插件
app.use(bodyParser())
app.use(cors())

// 配置静态资源, 可以直接通过文件目录访问文件
// const main = serve(path.join(__dirname))
// 缓存
app.use(staticCache(path.join(__dirname, './public'), { dynamic: true }, {
    maxAge: 365 * 24 * 60 * 60
}))

app.use(require('./routes/index').routes())

// npm config set blog:port 80 配置package中的port
app.listen(process.env.npm_package_config_port) // 服务启动端口

console.log(`http://localhost:${process.env.npm_package_config_port}`) // 日志打印