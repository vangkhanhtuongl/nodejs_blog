const Room = require('../models/Room')

class SiteController{
    //[GET] home
    home(req,res){
        Room.find({}, function (err, rooms) {
            if(!err) {
                res.json(rooms)
                return
            }
            res.status(400).send({ error: 'ERROR!!!' })
        })
        //res.render('Home')
    }
    //[GET] sreach
    sreach(req,res){
        res.render('Sreach')
    }
}

module.exports = new SiteController