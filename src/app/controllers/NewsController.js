class NewsController{
    //[GET] news
    index(req,res){
        res.render('News')
    }
    //[GET] :slug
    show(req,res){
        res.send('NEWS ABOUT THE HOTEL')
    }
}

module.exports = new NewsController