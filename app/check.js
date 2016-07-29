'use strict';

const config = require('./config');

module.exports = function () {
  if (config.get('api') === false || config.get('got.headers.Authorization') === false) {
    var missingConfig = [];
    if (config.get('api') === false) {
      missingConfig.push({
        heading: 'API Endpoint',
        detail: 'The API Endpoint needs to be configured. This is the hostname, port, and suffix of the edumate-api server.',
        example: 'http://HOSTNAME:PORT/api/'
      });
    }
    if (config.get('got.headers.Authorization') === false) {
      missingConfig.push({
        heading: 'Authorization Key',
        detail: 'Your Authorization Key is not set. This is the JWT token that allows Spanner to request data from edumate-api.',
        example: 'xxxxx.yyyyy.zzzzz'
      });
    }
    return missingConfig;
  } else {
    return 'OK';
  }
};
