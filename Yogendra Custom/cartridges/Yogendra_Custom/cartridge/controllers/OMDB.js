var server = require('server');
var service = require('kamal_custom_cartridge/cartridge/services/OMDB_kamal_Service');
server.get('Start', function (req, res, next) {
  var URL = service.OMDB_API.getURL();
  var SearchText = req.querystring.s;
  res.print(req.querystring.s);
  URL = URL + '&s=' + SearchText;
  service.OMDB_API.setURL(URL);
  var FullURL = service.OMDB_API.getURL();
  res.print(FullURL);
  var Results = service.OMDB_API.call();
  if (Results.status == 'OK') {
    res.print(Results.status);
    var JsonResults = Results.json();
    res.Results = JsonResults;
  }
  next();
});
server.get('Show', function (req, res, next) {
  res.render('OMDB');
  next();
});
module.exports = server.exports();
