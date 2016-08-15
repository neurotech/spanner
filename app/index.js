'use strict';
const Vue = require('vue');
const check = require('./check');

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
    issueCount: 0,
    issues: {
      missingDetentionClasses: [],
      coCurricularDuplicates: []
    }
  },
  created: function () {
    this.getTotalIssues();
  },
  methods: {
    route: function (path) {
      this.currentView = path;
    },
    getTotalIssues: function () {
      var total = 0;
      for (var item in this.issues) {
        if (this.issues[item].length > 0) {
          total++;
        }
      }
      this.issueCount = total;
    }
  },
  events: {
    'issue-counter': function (count) {
      this.issueCount = count;
    }
  }
});

window.app = app;
