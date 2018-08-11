#### 测试
```bash
cd koa-blog-server

npm install
```

> start

```bash
npm start
```
接口测试
+ 文章列表接口: /articles
+ 用户登录接口: /login
+ 用户登出接口: /loginOut
+ 用户信息接口：/user/:id

TIPS:
+ node版本 > 8

+ nodemon用来监视node.js应用程序中的任何更改并自动重启服务,非常适合用在开发环境中。
  [NODEMON-GITHUB](https://github.com/remy/nodemon#nodemon)

+ 本地调试建议用WAMP,简单方便，启动后建库/建表/添加初始化数据

+ 将session存放在MySQL数据库中
+ 需要用到中间件
  + koa-session-minimal 适用于koa2 的session中间件，提供存储介质的读写接口 。
  + koa-mysql-session 为koa-session-minimal中间件提供MySQL数据库的session数据读写操作。
  + 将sessionId和对于的数据存到数据库
+ 将数据库的存储的sessionId存到页面的cookie中
+ 根据cookie的sessionId去获取对于的session信息