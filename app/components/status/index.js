'use strict';
const path = require('path');
const pug = require('pug');

module.exports = {
  template: pug.renderFile(path.join(__dirname, 'status.pug')),
  mixins: [require('../../mixins/fetch-statuses')],
  data: function () {
    return {
      status: {
        edumate: {
          production: 'unknown',
          test: 'unknown'
        },
        exchange: {
          production: 'unknown',
          test: 'unknown',
          beta: 'unknown'
        }
      }
    };
  }
};
