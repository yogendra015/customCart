'use strict';
var server = require('server');
var CustomObjectMgr = require('dw/object/CustomObjectMgr');
var Transaction = require('dw/system/Transaction');


server.post('Show' , 
    function(req , res , next){
        var email = req.form.email;
        Transaction.wrap(function () {
            var CustomObject = CustomObjectMgr.createCustomObject('NewsletterSubscription' , email);
            // CustomObject.custom.email = email;
            CustomObject.custom.firstName = req.form.firstName ;
        });
        res.render('SFRAResultTemplate' , {
            email :	email,
            firstName : req.form.firstName
        });
        next();
        
    });
module.exports = server.exports();