function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import hoistNonReactStatics from 'hoist-non-react-statics';
import debounce from 'lodash/debounce';
import * as React from 'react';
import { subscribe } from 'subscribe-ui-event';
import { getWindowDimensions } from "../useWindowDimensions";
var delay = 250;
export var withWindowDimensions = function withWindowDimensions(WrappedComponent) {
  var Wrapper = function (_React$Component) {
    _inherits(Wrapper, _React$Component);

    var _super = _createSuper(Wrapper);

    function Wrapper(props) {
      var _this;

      _classCallCheck(this, Wrapper);

      _this = _super.call(this, props);

      _defineProperty(_assertThisInitialized(_this), "_isMounted", false);

      _defineProperty(_assertThisInitialized(_this), "_resizeListener", void 0);

      _defineProperty(_assertThisInitialized(_this), "debouncedHandle", debounce(_this._handleResize, delay));

      _this.state = {
        breakpointName: 'xs'
      };
      return _this;
    }

    _createClass(Wrapper, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this2 = this;

        this._isMounted = true;
        this._resizeListener = subscribe('resize', function (event, augmentedEvent) {
          return _this2.debouncedHandle(augmentedEvent.resize.width);
        }, {
          enableResizeInfo: true,
          useRAF: true
        });
        this.debouncedHandle(window.innerWidth);
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        var _this$_resizeListener;

        this._isMounted = false;
        (_this$_resizeListener = this._resizeListener) === null || _this$_resizeListener === void 0 ? void 0 : _this$_resizeListener.unsubscribe();
      }
    }, {
      key: "render",
      value: function render() {
        return React.createElement(WrappedComponent, _extends({
          breakpointName: this.state.breakpointName
        }, this.props));
      }
    }, {
      key: "_handleResize",
      value: function _handleResize(width) {
        var _getWindowDimensions = getWindowDimensions(),
            breakpointName = _getWindowDimensions.breakpointName;

        if (this._isMounted) {
          this.setState({
            breakpointName: breakpointName
          });
        }
      }
    }]);

    return Wrapper;
  }(React.Component);

  return hoistNonReactStatics(Wrapper, WrappedComponent);
};
//# sourceMappingURL=withWindowDimensions.js.map