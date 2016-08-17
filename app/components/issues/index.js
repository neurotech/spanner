'use strict';
const path = require('path');
const pug = require('pug');
const _ = require('underscore');

module.exports = {
  template: pug.renderFile(path.join(__dirname, 'issues.pug')),
  mixins: [require('../../mixins/fetch-issues')],
  data: function () {
    return {
      issueCount: 0,
      issues: [],
      groupedIssues: {}
    };
  },
  created: function () {
    this.fetchAllIssues();
    this.fetchIssueCount();
    this.$watch('issues', function (newVal, oldVal) {
      var grouped = _.groupBy(newVal, function (list) {
        var chunk = list.category;
        return chunk;
      });
      this.groupedIssues = grouped;
    });
  }
};
