
'use strict';

var server = require('server');
var URLUtils = require('dw/web/URLUtils');

//var csrfProtection = require('*/cartridge/scripts/middleware/csrf');

server.get(
    'Start',
    server.middleware.https,
    //csrfProtection.generateToken,
    function (req, res, next) {
        var actionUrl = URLUtils.url('SFRAFormResultByKamal-Show');
        var SFRAhelloform = server.forms.getForm('SFRAFormDef');
        SFRAhelloform.clear();

        res.render('SFRAFormTemplate', {
            actionUrl: actionUrl,
            SFRAhelloform: SFRAhelloform
        });

        next();
    }
);
module.exports = server.exports();
