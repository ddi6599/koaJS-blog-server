const Koa = require('koa')
const app = new Koa()
const serve = require('koa-static') // 静态资源服务插件
const path = require('path') // 路径管理
const bodyParser = require('koa-bodyparser') // 请求体，返回体解析类似json，text，图片等
const cors = require('@koa/cors')

app.use(bodyParser()) // 使用解析上下文插件
app.use(cors())

// 配置静态资源, 可以直接通过文件目录访问文件
const main = serve(path.join(__dirname))

app.use(main)

app.use(require('./routes/index').routes())

// npm config set blog:port 80 配置package中的port
app.listen(process.env.npm_package_config_port) // 服务启动端口

console.log(`http://localhost:${process.env.npm_package_config_port}`) // 日志打印