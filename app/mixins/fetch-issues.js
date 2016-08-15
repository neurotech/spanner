'use strict';
const config = require('../config');
const fetch = require('../lib/fetch');

module.exports = {
  created: function () {
    this.fetchAllIssues();
  },
  methods: {
    fetchAllIssues: function () {
      this.get(config.get('api') + 'issues/missing-detention-classes', config.get('got'), 'issues.missingDetentionClasses');
    },
    get: fetch.edumate
  }
};
