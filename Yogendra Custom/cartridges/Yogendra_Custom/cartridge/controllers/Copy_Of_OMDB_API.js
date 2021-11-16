var server = require('server');
var service = require('kamal_custom_cartridge/cartridge/services/OMDB_kamal_Service');

server.get('Show', function (req, res, next) {
    var properties = {};
    var Results = service.OMDB_API;
   
    let SearchTextUrl = req.querystring.s;
    SearchTextUrl = SearchTextUrl.split(" ").join("%20");
    let CallURL = Results.getURL();
    CallURL = CallURL +'&s='+SearchTextUrl;
    
    Results = Results.setURL(CallURL);
    
    Results = Results.call();

    
    res.json({
        "Results": Results.object
    });

    next();
});
server.get('Start', function (req, res, next) {
    res.render('OMDB');
    next();
});
module.exports = server.exports();