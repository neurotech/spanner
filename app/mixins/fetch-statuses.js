'use strict';
const config = require('../config');
const fetch = require('../lib/fetch');

module.exports = {
  created: function () {
    this.fetchAllStatuses();
  },
  methods: {
    fetchAllStatuses: function () {
      this.get(config.get('resources.edumate.production'), 'status.edumate.production');
      this.get(config.get('resources.edumate.test'), 'status.edumate.test');
      this.get(config.get('resources.exchange.production'), 'status.exchange.production');
      this.get(config.get('resources.exchange.test'), 'status.exchange.test');
      this.get(config.get('resources.exchange.beta'), 'status.exchange.beta');
    },
    get: fetch.status
  }
};
