var express = require('express')
var router = express.Router()

const siteController = require('../app/controllers/SiteController')

router.use('/sreach',siteController.sreach)
router.use('/',siteController.home)
module.exports=router