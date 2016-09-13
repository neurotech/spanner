'use strict';
const path = require('path');
const pug = require('pug');
const groupBy = require('lodash.groupby');
const config = require('../../config');

module.exports = {
  template: pug.renderFile(path.join(__dirname, 'issues.pug')),
  mixins: [
    require('../../mixins/fetch-issues'),
    require('../../mixins/clipboard'),
    require('../../mixins/jiggle')
  ],
  data: function () {
    return {
      issueCount: 0,
      issues: [],
      groupedIssues: {},
      clipboardStatus: ''
    };
  },
  created: function () {
    this.fetchAllData();
    this.fetchLoop = setInterval(this.fetchAllData, config.get('cycles.everyMinute'));
    this.fetchIssueCount();
    this.$watch('issues', function (newVal, oldVal) {
      var grouped = groupBy(newVal, function (list) {
        var chunk = list.category;
        return chunk;
      });
      this.groupedIssues = grouped;
    });
  },
  beforeDestroy: function () {
    clearInterval(this.fetchLoop);
  }
};
