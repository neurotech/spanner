'use strict';
const path = require('path');
const pug = require('pug');

module.exports = {
  template: pug.renderFile(path.join(__dirname, 'issues.pug')),
  mixins: [require('../../mixins/fetch-issues')],
  data: function () {
    return {
      totalIssues: null,
      issues: {
        missingDetentionClasses: [],
        coCurricularDuplicates: []
      }
    };
  },
  created: function () {
    this.fetchAllIssues();
    setInterval(this.getIssueCount, 2000);
  },
  methods: {
    getIssueCount: function () {
      var total = 0;
      for (var item in this.issues) {
        if (this.issues[item].length > 0) {
          total++;
        }
      }
      this.totalIssues = total;
      this.$dispatch('issue-counter', total);
    }
  }
};
