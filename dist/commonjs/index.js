"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.configure = configure;

var _smoothScroll = require("./smooth-scroll");

Object.defineProperty(exports, "SmoothScroll", {
  enumerable: true,
  get: function get() {
    return _smoothScroll.SmoothScroll;
  }
});

function configure(aurelia, cb) {
  aurelia.globalResources("./smooth-scroll");
  var config = _smoothScroll.SmoothScroll.defaultConfig;
  if (cb !== undefined && typeof cb === 'function') cb(config);
}
//# sourceMappingURL=index.js.map
