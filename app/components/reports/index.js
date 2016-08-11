'use strict';
const path = require('path');
const pug = require('pug');

module.exports = {
  template: pug.renderFile(path.join(__dirname, 'reports.pug')),
  mixins: [require('../../mixins/fetch-reports'), require('../../mixins/convert-to-class')],
  data: function () {
    return {
      reportName: '',
      reports: []
    };
  }
};
