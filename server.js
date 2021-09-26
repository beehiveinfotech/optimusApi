'use strict'

const express = require('express')
     ,app = express()
     ,bodyParser = require('body-parser')
     ,loggerObj = require('./config/logger/logger.js')
     ,helmet = require('helmet')
    

let config = require(__dirname + '/config')
    ,db = require(__dirname + '/config/db.js')
    ,appDir = config.appDir
console.log('PORT NUMBER',config.port)
app.use(bodyParser.json({limit: '10kb'}))
app.use(helmet())
app.use(helmet.xssFilter())
app.use(helmet.frameguard())
app.set('port', process.env.PORT || config.port)
 
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header( 'Access-Control-Allow-Methods' , 'GET,POST,PUT,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With, x-access-token, x-email-id,  role,emailaddress,pwd,logintype')
    console.log('The Request Body in Server.js',req.body)
    
    let options = {db:db, logger : loggerObj}
    req.headers.options = options
    if (req.method === 'OPTIONS'){ 
       return res.send(200)
    }
    next()
  })
  

  let server = app.listen(app.get('port'))
  app.get('/',(req,res) =>{
    res.status(200).send('Our server is running at port. '+ app.get('port'))
  })
  app.use('/api/v1/', require(appDir + '/routes'))
  module.exports = app


