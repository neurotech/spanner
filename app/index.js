'use strict';
const Vue = require('vue');
const moment = require('moment');
const config = require('./config');
const check = require('./check');

Vue.config.devtools = false;
Vue.component('home', require('./components/home'));
Vue.component('issues', require('./components/issues'));
Vue.component('status', require('./components/status'));
Vue.component('reports', require('./components/reports'));
Vue.component('staff', require('./components/staff'));

var app = new Vue({
  el: '#app',
  mixins: [require('./mixins/fetch-issues')],
  data: {
    currentView: 'issues',
    freshness: '',
    missingConfig: check(),
    issueCount: 0
  },
  created: function () {
    this.fetchIssueCount();
    setInterval(this.fetchIssueCount, config.get('cycles.everyMinute'));
  },
  methods: {
    route: function (path) {
      this.currentView = path;
    },
    lastUpdated: function (raw) {
      var nice = moment(raw).format(config.get('lastUpdated.format'));
      return nice;
    }
  },
  events: {
    'freshness-update': function (dateTime) {
      this.freshness = dateTime;
    }
  }
});

window.app = app;
