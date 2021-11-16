var LocalServiceRegistry = require('dw/svc/LocalServiceRegistry');
var server = require('server');

function Create_OMDB_Service(SearchText) {
  var OMDB_API = LocalServiceRegistry.createService('OMDB_kamal_Service', {
    createRequest: function (svc, params) {
      svc.setRequestMethod('GET');
      svc.addParam('s', SearchText);
      return params;
    },
    parseResponse: function (svc, httpClient) {
      var result;

      try {
        result = JSON.parse(httpClient.text);
      } catch (e) {
        result = httpClient.text;
      }
      return result;
    }
  });
}

module.exports = {
  Create_OMDB_Service: Create_OMDB_Service
};
