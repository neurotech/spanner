'use strict';
const clipboard = require('electron').clipboard;

module.exports = {
  methods: {
    copyToClipboard: function (payload) {
      this.clipboardStatus = 'Copied';
      if (payload.length > 0) {
        // TODO: If array and length > 0, take the value for each `fix` key and make into a buffer with line breaks, then copy to clipboard.
        // i.e. "RazorSQL-friendly" text
        clipboard.writeText(payload[0].fix);
      }
      setTimeout(this.clearClipboardStatus, 2000);
    },
    clearClipboardStatus: function () {
      this.clipboardStatus = '';
    }
  }
};
