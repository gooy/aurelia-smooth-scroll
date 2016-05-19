define(['exports', 'aurelia-framework', 'aurelia-router'], function (exports, _aureliaFramework, _aureliaRouter) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  var SmoothScroll = (function () {
    var _instanceInitializers = {};
    var _instanceInitializers = {};

    _createDecoratedClass(SmoothScroll, [{
      key: 'duration',
      decorators: [_aureliaFramework.bindable],
      initializer: null,
      enumerable: true
    }, {
      key: 'easing',
      decorators: [_aureliaFramework.bindable],
      initializer: null,
      enumerable: true
    }], [{
      key: 'defaultConfig',
      value: {
        duration: 400,
        easing: "ease-in"
      },
      enumerable: true
    }, {
      key: 'inject',
      value: [Element, _aureliaFramework.Animator, _aureliaRouter.Router],
      enumerable: true
    }], _instanceInitializers);

    function SmoothScroll(element, animator, router) {
      _classCallCheck(this, _SmoothScroll);

      _defineDecoratedPropertyDescriptor(this, 'duration', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'easing', _instanceInitializers);

      this.subs = [];

      this.element = element;
      this.animator = animator;

      var config = SmoothScroll.defaultConfig;
      if (config.duration) this.duration = config.duration;
      if (config.easing) this.easing = config.easing;
    }

    _createDecoratedClass(SmoothScroll, [{
      key: 'attached',
      value: function attached() {
        var sub = this.onClick.bind(this);
        this.subs.push();
        this.element.addEventListener("click", sub);
      }
    }, {
      key: 'detached',
      value: function detached() {
        if (this.subs) {
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = this.subs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var sub = _step.value;
              sub();
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator['return']) {
                _iterator['return']();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }
        }
      }
    }, {
      key: 'onClick',
      value: function onClick(event) {
        event.preventDefault();
        this.scrollTo(this.element.getAttribute("href"), {}, document.body);
        return false;
      }
    }, {
      key: 'scrollTo',
      value: function scrollTo(elementOrHash) {
        var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
        var container = arguments.length <= 2 || arguments[2] === undefined ? document.body : arguments[2];

        var target = elementOrHash;
        var hash = null;

        if (typeof elementOrHash === "string" && elementOrHash.indexOf("#") === 0) {
          hash = elementOrHash.slice(1, elementOrHash.length);
          if (hash) {
            target = container.querySelector('[id="' + hash + '"]');
            if (!target) container.querySelector('[name="' + hash + '"]');
          } else {
            target = document.body;
          }

          if (history) {
            history.pushState(null, null, '#' + hash);
          } else {
            var t = container.scrollTop;
            location.hash = hash;
            container.scrollTop = t;
          }
        }

        if (!target || typeof target === "string") return Promise.resolve();
        return this.animator.animate(target, "scroll", Object.assign({
          duration: this.duration,
          offset: SmoothScroll.getOffset(),
          easing: this.easing
        }, options));
      }
    }], [{
      key: 'getOffset',
      value: function getOffset() {
        return -document.querySelector(".page-host").offsetTop;
      }
    }], _instanceInitializers);

    var _SmoothScroll = SmoothScroll;
    SmoothScroll = (0, _aureliaFramework.noView)(SmoothScroll) || SmoothScroll;
    SmoothScroll = (0, _aureliaFramework.customAttribute)("smooth-scroll")(SmoothScroll) || SmoothScroll;
    return SmoothScroll;
  })();

  exports.SmoothScroll = SmoothScroll;
});
//# sourceMappingURL=smooth-scroll.js.map
