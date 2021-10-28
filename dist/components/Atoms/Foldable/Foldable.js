function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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

import React from 'react';
import { styled } from "../../../styles/styled";
export var StyledFoldable = styled.div.withConfig({
  displayName: "Foldable__StyledFoldable",
  componentId: "i6bop3-0"
})(["overflow:hidden;", ""], function (_ref) {
  var looksOpenFromBreakpoint = _ref.looksOpenFromBreakpoint;
  return looksOpenFromBreakpoint && "\n    @media (min-width: ".concat(looksOpenFromBreakpoint, "px) {\n      height: auto !important;\n    }\n  ");
});
export var Foldable = function (_React$Component) {
  _inherits(Foldable, _React$Component);

  var _super = _createSuper(Foldable);

  function Foldable(props) {
    var _this;

    _classCallCheck(this, Foldable);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "entryRef", void 0);

    _defineProperty(_assertThisInitialized(_this), "standardDuration", void 0);

    _defineProperty(_assertThisInitialized(_this), "maxDuration", void 0);

    _defineProperty(_assertThisInitialized(_this), "_afterTransition", function () {
      var isOpen = _this.props.isOpen;

      if (isOpen) {
        _this.setState({
          height: 'auto'
        });
      }
    });

    _this.entryRef = React.createRef();
    _this.standardDuration = 300;
    _this.maxDuration = 1000;
    _this.state = {
      height: _this._getHeight(),
      transition: "height ".concat(_this.standardDuration, "ms linear"),
      looksOpenFromBreakpoint: props.looksOpenInitiallyFromBreakpoint
    };
    return _this;
  }

  _createClass(Foldable, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.isOpen) {
        this._updateHeightBeforeTransition();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.isOpen !== prevProps.isOpen) {
        this._updateHeightBeforeTransition();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          _isOpen = _this$props.isOpen,
          rest = _objectWithoutProperties(_this$props, ["isOpen"]);

      var looksOpenFromBreakpoint = this.state.looksOpenFromBreakpoint;
      return React.createElement(StyledFoldable, _extends({
        "data-test": 'foldable',
        style: this._applyTransition(),
        onTransitionEnd: this._afterTransition,
        className: this.props.className,
        looksOpenFromBreakpoint: looksOpenFromBreakpoint
      }, rest), React.createElement("div", {
        "data-test": "inner-foldable",
        ref: this.entryRef
      }, this.props.children));
    }
  }, {
    key: "_scrollToElement",
    value: function _scrollToElement(duration) {
      var currentElement = this.entryRef.current;
      setTimeout(function () {
        var rect = (currentElement === null || currentElement === void 0 ? void 0 : currentElement.getBoundingClientRect()) || {
          top: 0
        };

        if (rect.top < 0) {
          window.scrollTo(0, 0);
          var rectUpdate = (currentElement === null || currentElement === void 0 ? void 0 : currentElement.getBoundingClientRect()) || {
            top: 0,
            height: 0
          };
          window.scrollTo(0, rectUpdate.top - rectUpdate.height);
        }
      }, duration);
    }
  }, {
    key: "_updateHeightBeforeTransition",
    value: function _updateHeightBeforeTransition() {
      var _currentElement$clien,
          _this2 = this;

      var looksOpenFromBreakpoint = this.state.looksOpenFromBreakpoint;
      var isTransitionCancelled = !!looksOpenFromBreakpoint;
      var currentElement = this.entryRef.current;

      var calculatedDuration = this._getDuration();

      var animationType = this._getAnimationType(calculatedDuration);

      var height = isTransitionCancelled ? 'auto' : (_currentElement$clien = currentElement === null || currentElement === void 0 ? void 0 : currentElement.clientHeight) !== null && _currentElement$clien !== void 0 ? _currentElement$clien : 'auto';
      var transition = isTransitionCancelled ? '' : "height ".concat(calculatedDuration, "ms ").concat(animationType);
      this.setState({
        height: height,
        transition: transition,
        looksOpenFromBreakpoint: undefined
      }, function () {
        if (!_this2.props.isOpen) {
          _this2._updateTransition();
        } else {
          _this2._scrollToElement(calculatedDuration);
        }
      });
    }
  }, {
    key: "_getDuration",
    value: function _getDuration() {
      var isOpen = this.props.isOpen;
      var currentElement = this.entryRef.current;
      var calcDuration = !!currentElement && currentElement.clientHeight / 2;

      if (calcDuration) {
        if (!isOpen) {
          return this.standardDuration;
        } else if (calcDuration > this.maxDuration) {
          return this.maxDuration;
        } else if (calcDuration < this.standardDuration) {
          return this.standardDuration;
        } else {
          return calcDuration;
        }
      } else {
        return this.standardDuration;
      }
    }
  }, {
    key: "_getAnimationType",
    value: function _getAnimationType(calculatedDuration) {
      var isOpen = this.props.isOpen;
      return calculatedDuration === this.standardDuration ? 'linear' : isOpen ? 'ease-in' : 'ease-out';
    }
  }, {
    key: "_updateTransition",
    value: function _updateTransition() {
      var calculatedDuration = this._getDuration();

      var animationType = this._getAnimationType(calculatedDuration);

      this.setState({
        height: this._getHeight(),
        transition: "height ".concat(calculatedDuration, "ms ").concat(animationType)
      });
    }
  }, {
    key: "_applyTransition",
    value: function _applyTransition() {
      return {
        height: this.state.height,
        transition: this.state.transition
      };
    }
  }, {
    key: "_getHeight",
    value: function _getHeight() {
      var isOpen = this.props.isOpen;
      return isOpen ? 'auto' : 0;
    }
  }]);

  return Foldable;
}(React.Component);
//# sourceMappingURL=Foldable.js.map