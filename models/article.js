const Sequelize = require('sequelize')
const sequelize = require('../lib')
const articles = sequelize.define(
    'articles',
    {
        id: {
            type: Sequelize.STRING(11),
            primaryKey: true
        },
        aId: Sequelize.STRING(11),
        tags: Sequelize.STRING(500),
        title: Sequelize.STRING(100),
        desc: Sequelize.STRING(1000),
        detail: Sequelize.STRING(10000),
        views: Sequelize.STRING(11),
        date: Sequelize.BIGINT(100)
    },
    {
        timestamps: false
    }
)

module.exports = articles
