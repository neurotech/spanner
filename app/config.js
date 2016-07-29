'use strict';

const Config = require('electron-config');

module.exports = new Config({
  defaults: {
    api: false,
    got: {
      json: true,
      headers: {
        Authorization: false
      }
    },
    now: {
      date: 'dddd Do MMMM',
      time: 'h:mm A'
    },
    cycles: {
      everySecond: 1000,
      everyMinute: 60000
    },
    lastUpdated: {
      format: 'Do MMMM [at] h:mm A'
    }
  }
});
