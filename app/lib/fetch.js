'use strict';
const got = require('got');
var fetch = {};

fetch.status = function (endpoint, key) {
  this.$set(key, 'checking');
  return got.head(endpoint).then(() => {
    this.$set(key, 'up');
  }).catch(() => {
    this.$set(key, 'down');
  });
};

fetch.edumate = function (endpoint, options, key) {
  this.$set(key, []);
  return got(endpoint, options)
    .then(response => {
      this.$set(key, response.body);
    })
    .catch(error => {
      console.error(error);
    });
};

module.exports = fetch;
