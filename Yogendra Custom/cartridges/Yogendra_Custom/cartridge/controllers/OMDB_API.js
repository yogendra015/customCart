var server = require('server');
var service = require('kamal_custom_cartridge/cartridge/services/OMDB_kamal_Service');

server.get('Show', function (req, res, next) {
    var properties = {};
    var Results = service.OMDB_API;
   
    var SearchTextUrl = req.querystring.s;
    SearchTextUrl = SearchTextUrl.split(" ").join("%20");
    var CallURL = Results.getURL();
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
server.get('Details', function (req, res, next) {
    var properties = {};
    var Results = service.OMDB_API;
   
    var SearchTextUrl = req.querystring.s;
    SearchTextUrl = SearchTextUrl.split(" ").join("%20");
    let CallURL = Results.getURL();
    CallURL = CallURL +'&i='+SearchTextUrl;
    
    Results = Results.setURL(CallURL);
    
    Results = Results.call();

    
    res.json({
        "Results": Results.object
    });

    next();
});

server.get('NextPage', function (req, res, next) {
    var properties = {};
    var Results = service.OMDB_API;
   
    var SearchTextUrl = req.querystring.s;
    var PageNo = req.querystring.page;
    SearchTextUrl = SearchTextUrl.split(" ").join("%20");
    var CallURL = Results.getURL();
    CallURL = CallURL +'&s='+SearchTextUrl+'&page='+PageNo;
    
    Results = Results.setURL(CallURL);
    
    Results = Results.call();

    
    res.json({
        "Results": Results.object
    });

    next();
});
module.exports = server.exports();
