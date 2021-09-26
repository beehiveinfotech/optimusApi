'use strict'

const winston = require('winston')
const loggerConfiguration = {
	'transports':[
	    new winston.transports.File({

			  level: 'info',
		      colorize: false,
		      timestamp: true,
		      json: true, 
		      maxsize: 5242880,
		      maxFile: 10,
		      logstash: false,
		      tailable: true,
        	  filename : "./log/dev.log"

	    	}),
	      new winston.transports.Console({
            level: 'debug',
            handleExceptions: true,
            json: false,
            colorize: true
        })
	    
	]	
}

const logger = winston.createLogger(loggerConfiguration)

module.exports = logger

