System.register(['aurelia-framework', 'aurelia-router'], function (_export) {
  'use strict';

  var bindable, noView, customAttribute, Animator, Router, SmoothScroll;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer.call(target); Object.defineProperty(target, key, descriptor); }

  return {
    setters: [function (_aureliaFramework) {
      bindable = _aureliaFramework.bindable;
      noView = _aureliaFramework.noView;
      customAttribute = _aureliaFramework.customAttribute;
      Animator = _aureliaFramework.Animator;
    }, function (_aureliaRouter) {
      Router = _aureliaRouter.Router;
    }],
    execute: function () {
      SmoothScroll = (function () {
        var _instanceInitializers = {};

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

        var _SmoothScroll = SmoothScroll;

        _createDecoratedClass(_SmoothScroll, [{
          key: 'attached',
          value: function attached() {
            var sub = this.onClick.bind(this);
            this.subs.push();
            this.element.addEventListener('click', sub);
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
                  var _sub = _step.value;
                  _sub();
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
            this.scrollTo(this.element.getAttribute('href'), {}, document.body);
            return false;
          }
        }, {
          key: 'scrollTo',
          value: function scrollTo(elementOrHash) {
            var options = arguments[1] === undefined ? {} : arguments[1];
            var container = arguments[2] === undefined ? document.body : arguments[2];

            var target = elementOrHash;

            if (typeof elementOrHash === 'string') {
              var hash = elementOrHash;
              if (hash.indexOf('#') === 0) hash = hash.slice(1, hash.length);
              target = container.querySelector('[id="' + hash + '"]');
              if (!target) container.querySelector('[name="' + hash + '"]');
            }

            if (history) {
              history.pushState(null, null, '#' + hash);
            } else {
              var t = container.scrollTop;
              location.hash = hash;
              container.scrollTop = t;
            }

            return this.animator.animate(target, 'scroll', Object.assign({
              duration: this.duration,
              offset: SmoothScroll.getOffset(),
              easing: this.easing
            }, options));
          }
        }, {
          key: 'duration',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }, {
          key: 'easing',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }], [{
          key: 'getOffset',
          value: function getOffset() {
            return -document.querySelector('.page-host').offsetTop;
          }
        }, {
          key: 'defaultConfig',
          value: {
            duration: 400,
            easing: 'ease-in'
          },
          enumerable: true
        }, {
          key: 'inject',
          value: [Element, Animator, Router],
          enumerable: true
        }], _instanceInitializers);

        SmoothScroll = noView(SmoothScroll) || SmoothScroll;
        SmoothScroll = customAttribute('smooth-scroll')(SmoothScroll) || SmoothScroll;
        return SmoothScroll;
      })();

      _export('SmoothScroll', SmoothScroll);
    }
  };
});
//# sourceMappingURL=smooth-scroll.js.map