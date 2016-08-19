'use strict';
const config = require('../config');
const fetch = require('../lib/fetch');

module.exports = {
  created: function () {
    this.fetchAllData();
  },
  methods: {
    fetchAllData: function () {
      this.get(config.get('api') + 'staff/absent/now', config.get('got'), 'staffAway.now');
      this.get(config.get('api') + 'staff/absent/soon', config.get('got'), 'staffAway.soon');
      this.get(config.get('api') + 'staff/absent/allday', config.get('got'), 'staffAway.allDay');
    },
    get: fetch.edumate
  }
};
