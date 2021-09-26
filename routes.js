'use strict'


const express = require('express')
      ,config = require(__dirname + '/config')
      ,appdir = config.appDir
const router = express.Router()
// const fileUpload = require('express-fileupload')
   
    ,projectModels = require('optimus-models')
    ,adauth = require('optimus-auth')
    ,signupusercontroller= projectModels['signupuser']
    ,verifyuserotpcontroller =projectModels['verifyuserotp']
    ,planoperationcontroller = projectModels['planoperation']
    ,logincontroller = projectModels['login']
    ,networkcontroller = projectModels['getnetworkdata']
    ,getcoinsdetaislcontroller = projectModels['getcoindetail']
    ,resetoperationcontroller = projectModels['resetoperation']
    ,getplandetailscontroller = projectModels['getplandetails']
    ,getpaymethodcontroller = projectModels['getpaymethod']
    ,getpurchasecontroller = projectModels['purchaseoperation']
    ,getCalculatedCoinDetailscontroller = projectModels['getCalculatedCoinDetails']
    
    
    
//router.post('/authenticate',adauth.authenticate)
router.post('/signupuser',signupusercontroller.signupuser)
router.post('/verifyuserotp',verifyuserotpcontroller.verifyuserotp)
router.post('/login',logincontroller.login)
router.get('/getCoinsDetails',getcoinsdetaislcontroller.getcoindeial)
router.post('/resetoperation',resetoperationcontroller.resetoperation)
router.get('/getplandetails',getplandetailscontroller.getplandetails)
router.get('/getcalulcatedcoindetails',getCalculatedCoinDetailscontroller.getCalculatedCoinDetails)


router.use(adauth.login)
router.post('/planoperation',planoperationcontroller.planoperation)
router.post('/getnetworkdata',networkcontroller.getnetworkdata)
router.post('/getpaymethod',getpaymethodcontroller.getpaymethod)
router.post('/purchaseoperation',getpurchasecontroller.purchaseoperation)


console.log('Server Started')
module.exports = router



