'use strict';
const config = require('../config');
const fetch = require('../lib/fetch');

module.exports = {
  created: function () {
    this.fetchAllData();
  },
  methods: {
    fetchAllData: function () {
      this.get(config.get('api') + 'reports/all', config.get('got'), 'reports');
    },
    get: fetch.edumate
  }
};
