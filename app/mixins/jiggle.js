'use strict';

module.exports = {
  methods: {
    jiggle: function (payload, step) {
      var chunked = payload.split('');
      var delay = 0 - step;
      var spanned = chunked.map(function (chunk) {
        var html = `<span id="jiggle" style="animation-delay: ${delay += step}ms">${chunk}</span>`;
        return html;
      });
      return spanned.join('');
    }
  }
};
