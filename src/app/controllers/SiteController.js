class SiteController{
    //[GET] home
    home(req,res){
        res.render('Home')
    }
    //[GET] sreach
    sreach(req,res){
        res.render('Sreach')
    }
}

module.exports = new SiteController