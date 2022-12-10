const { Router } = require('express')
var express = require('express')
var router = express.Router()

const siteController = require('../app/controllers/SiteController')

router.get('/sreach',siteController.sreach)
router.post('/sreach',siteController.sreach)
router.get('/',siteController.home)

module.exports=router