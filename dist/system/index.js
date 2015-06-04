System.register(["./smooth-scroll"], function (_export) {
  "use strict";

  var SmoothScroll;

  _export("configure", configure);

  function configure(aurelia, cb) {
    aurelia.globalizeResources("./smooth-scroll");
    var config = SmoothScroll.defaultConfig;
    if (cb !== undefined && typeof cb === "function") cb(config);
  }

  return {
    setters: [function (_smoothScroll) {
      SmoothScroll = _smoothScroll.SmoothScroll;

      _export("SmoothScroll", _smoothScroll.SmoothScroll);
    }],
    execute: function () {}
  };
});
//# sourceMappingURL=index.js.map