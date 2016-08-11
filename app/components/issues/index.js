'use strict';
const path = require('path');
const pug = require('pug');

module.exports = {
  template: pug.renderFile(path.join(__dirname, 'issues.pug')),
  // mixins: [require('../../mixins/fetch-statuses')],
  data: function () {
    return {
      issues: []
    };
  }
};
