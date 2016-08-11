'use strict';

module.exports = {
  methods: {
    convertToClass: function (str) {
      var lower = str.toLowerCase();
      var result = lower.split(' ').join('-');
      return result;
    }
  }
};
