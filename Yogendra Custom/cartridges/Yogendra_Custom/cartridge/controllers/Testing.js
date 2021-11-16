'use strict'
var server = require('server');
var var URLUtils = require('dw/web/URLUtils');
server.get('Start' , function( req , res , next)
{
    var actionUrl = URLUtils.url('Newsletter-Handler');
    res.print(actionUrl);
    res.json(
        {
            "URL" : actionUrl;
        }
    );
    next();
})
module.exports = server.exports();