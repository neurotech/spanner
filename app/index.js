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
  data: {
    currentView: 'home',
    missingConfig: check(),
    issueCount: 12
  },
  created: function () {},
  methods: {
    route: function (path) {
      this.currentView = path;
    }
  }
});

window.app = app;
