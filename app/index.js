'use strict';
const Vue = require('vue');
const human = require('human-time');
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
    lastUpdatedAt: '',
    missingConfig: check(),
    issueCount: 0
  },
  created: function () {
    this.fetchIssueCount();
    this.updateLastUpdated();
    setInterval(this.fetchIssueCount, config.get('cycles.everyMinute'));
    setInterval(this.updateLastUpdated, config.get('cycles.everySecond') * 3);
  },
  methods: {
    route: function (path) {
      this.currentView = path;
    },
    lastUpdated: function (raw) {
      var ago = human(new Date(raw));
      return ago;
    },
    updateLastUpdated: function () {
      if (this.freshness.length > 0) {
        this.lastUpdatedAt = this.lastUpdated(this.freshness);
      }
    }
  },
  events: {
    'freshness-update': function (dateTime) {
      this.freshness = dateTime;
    }
  },
  transitions: {
    'fader': require('./transitions/fader')
  }
});

window.app = app;
