'use strict';
const Vue = require('vue');
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
    currentView: 'home',
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
    }
  }
});

window.app = app;
