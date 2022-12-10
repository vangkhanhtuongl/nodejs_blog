const siteRouter = require('./site')
const newsRouter = require('./news')

function Route(app){

    app.use('/news',newsRouter)
    app.use('/',siteRouter)

}

module.exports = Route