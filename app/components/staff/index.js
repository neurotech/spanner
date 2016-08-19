'use strict';
const path = require('path');
const pug = require('pug');

module.exports = {
  template: pug.renderFile(path.join(__dirname, 'staff.pug')),
  mixins: [require('../../mixins/fetch-staff-away')],
  data: function () {
    return {
      staffAwayDetails: [],
      staffAway: {
        now: null,
        soon: null,
        allDay: null
      }
    };
  },
  transitions: {
    'fader': require(path.join(__dirname, '../../transitions/fader'))
  }
};
