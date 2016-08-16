'use strict';
const config = require('../config');
const fetch = require('../lib/fetch');

module.exports = {
  methods: {
    fetchAllIssues: function () {
      this.get(config.get('api') + 'issues', config.get('got'), 'issues');
    },
    fetchIssueCount: function () {
      this.get(config.get('api') + 'issues/total', config.get('got'), 'issueCount');
    },
    get: fetch.edumate
  }
};
