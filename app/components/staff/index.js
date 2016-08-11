'use strict';
const path = require('path');
const pug = require('pug');

module.exports = {
  template: pug.renderFile(path.join(__dirname, 'staff.pug')),
  mixins: [require('../../mixins/fetch-staff-away')],
  data: function () {
    return {
      staffAway: {
        now: null,
        soon: null,
        allDay: null
      }
    };
  }
};
