var LocalServiceRegistry = require('dw/svc/LocalServiceRegistry');

var OMDB_API = LocalServiceRegistry.createService('OMDB_kamal_Service', {
  createRequest: function (svc, params) {
    svc.setRequestMethod('GET');
    svc.addHeader('Accept', 'application/json');
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

module.exports = {
  OMDB_API: OMDB_API
};

