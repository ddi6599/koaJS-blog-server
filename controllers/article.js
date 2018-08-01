const Sequelize = require('sequelize')
const articles = require('../models/article')
/**
 * 查询文章列表
 *
 * @param  {pageSize, pageNum} 每页展示条数, 页码
 * @return {JSONArray} 返回标签对应的文章信息
 */
const getArticles = async ctx => {
    let pageSize = ''
    let pageNum = ''
    let total = 0
    await articles.findAll().then(data => {
        total = data.length
    })
    await articles
        .findAll({
            attributes: [
                'aId',
                'date',
                'tags',
                'title',
                'desc',
                'detail',
                'views',
                'title'
            ],
            order: ['date']
        })
        .then(data => {
            let list = []
            if (ctx.request.query.pageSize) {
                pageSize = parseInt(ctx.request.query.pageSize)
                pageNum = parseInt(ctx.request.query.pageNum)
                list = data
                    .reverse()
                    .slice(pageSize * (pageNum - 1), pageSize + pageSize * (pageNum - 1))
                ctx.body = {
                    msg: '查询成功',
                    status: 200,
                    total: Math.ceil(total / pageSize),
                    pageNum: pageNum,
                    pageSize: pageSize,
                    datalist: list
                }
            } else {
                // 按年份整理返参格式
                list = data.reverse()
                let yearList = []
                let result = []
                for (let i = 0; i < list.length; i++) {
                    yearList.push(new Date(list[i].date).getFullYear())
                }
                yearList = [...new Set(yearList)]
                for (let i = 0; i < yearList.length; i++) {
                    let obj = {
                        year: yearList[i],
                        list: []
                    }
                    for (let j = 0; j < list.length; j++) {
                        if (yearList[i] === new Date(list[j].date).getFullYear()) {
                            obj.list.push(list[j])
                        }
                    }
                    result.push(obj)
                }
                ctx.body = {
                    msg: '查询成功',
                    status: 200,
                    total: list.length,
                    datalist: result
                }
            }
        })
        .catch(err => {
            ctx.body = {
                msg: err,
                status: 999999
            }
        })
}

module.exports = {
    getArticles
}
