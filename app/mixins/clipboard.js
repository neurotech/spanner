'use strict';
const clipboard = require('electron').clipboard;

module.exports = {
  methods: {
    copyToClipboard: function (payload) {
      this.clipboardStatus = 'Copied';
      if (payload.length > 0) {
        var fixes = payload.map(function (item) {
          return item['fix'];
        });
        clipboard.writeText(fixes.join('\n'));
      }
      setTimeout(this.clearClipboardStatus, 2500);
    },
    clearClipboardStatus: function () {
      this.clipboardStatus = '';
    }
  }
};
