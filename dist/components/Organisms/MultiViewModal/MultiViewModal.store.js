function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { createContext, useContext, useReducer, useMemo } from 'react';
var MultiViewModalActionType;

(function (MultiViewModalActionType) {
  MultiViewModalActionType["MULTI_VIEW_MODAL_CLOSE"] = "MULTI_VIEW_MODAL_CLOSE";
  MultiViewModalActionType["MULTI_VIEW_MODAL_GO_HOME"] = "MULTI_VIEW_MODAL_GO_HOME";
  MultiViewModalActionType["MULTI_VIEW_MODAL_SET_VIEW"] = "MULTI_VIEW_MODAL_SET_VIEW";
  MultiViewModalActionType["MULTI_VIEW_MODAL_SET_ACTIVE"] = "MULTI_VIEW_MODAL_SET_ACTIVE";
})(MultiViewModalActionType || (MultiViewModalActionType = {}));

var closeAction = function closeAction() {
  return {
    type: MultiViewModalActionType.MULTI_VIEW_MODAL_CLOSE,
    payload: {}
  };
};

var goHomeAction = function goHomeAction() {
  return {
    type: MultiViewModalActionType.MULTI_VIEW_MODAL_GO_HOME,
    payload: {}
  };
};

var setViewAction = function setViewAction(id) {
  return {
    type: MultiViewModalActionType.MULTI_VIEW_MODAL_SET_VIEW,
    payload: {
      id: id
    }
  };
};

var setActiveAction = function setActiveAction(isActive) {
  return {
    type: MultiViewModalActionType.MULTI_VIEW_MODAL_SET_ACTIVE,
    payload: {
      isActive: isActive
    }
  };
};

var initialState = {
  homeViewId: null,
  activeViewId: null,
  hasBackButton: false,
  isActive: false
};

var reducer = function reducer(state, action) {
  switch (action.type) {
    case MultiViewModalActionType.MULTI_VIEW_MODAL_CLOSE:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          activeViewId: state.homeViewId,
          hasBackButton: false,
          isActive: false
        });
      }

    case MultiViewModalActionType.MULTI_VIEW_MODAL_GO_HOME:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          activeViewId: state.homeViewId,
          hasBackButton: false
        });
      }

    case MultiViewModalActionType.MULTI_VIEW_MODAL_SET_VIEW:
      {
        var _ref = action,
            id = _ref.payload.id;
        return _objectSpread(_objectSpread({}, state), {}, {
          activeViewId: id,
          hasBackButton: id !== state.homeViewId
        });
      }

    case MultiViewModalActionType.MULTI_VIEW_MODAL_SET_ACTIVE:
      {
        var _ref2 = action,
            isActive = _ref2.payload.isActive;
        return _objectSpread(_objectSpread({}, state), {}, {
          isActive: isActive
        });
      }

    default:
      return state;
  }
};

var MultiViewModalContext = createContext([initialState, function (action) {
  return console.log(action);
}]);

var useMultiViewModalContext = function useMultiViewModalContext() {
  return useContext(MultiViewModalContext);
};

var useMultiViewModalReducer = function useMultiViewModalReducer(homeViewId) {
  return useReducer(reducer, _objectSpread(_objectSpread({}, initialState), {}, {
    homeViewId: homeViewId,
    activeViewId: homeViewId
  }));
};

export var useMultiViewModalAction = function useMultiViewModalAction() {
  var _useMultiViewModalCon = useMultiViewModalContext(),
      _useMultiViewModalCon2 = _slicedToArray(_useMultiViewModalCon, 2),
      dispatch = _useMultiViewModalCon2[1];

  return useMemo(function () {
    return {
      close: function close() {
        return dispatch(closeAction());
      },
      goHome: function goHome() {
        return dispatch(goHomeAction());
      },
      setView: function setView(id) {
        return dispatch(setViewAction(id));
      },
      setActive: function setActive(isActive) {
        return dispatch(setActiveAction(isActive));
      }
    };
  }, [dispatch]);
};
export var useMultiViewModalState = function useMultiViewModalState() {
  return useMultiViewModalContext()[0];
};
export var MultiViewModalProvider = function MultiViewModalProvider(_ref3) {
  var homeViewId = _ref3.homeViewId,
      children = _ref3.children;
  var modalReducer = useMultiViewModalReducer(homeViewId);
  return React.createElement(MultiViewModalContext.Provider, {
    value: modalReducer
  }, children);
};
//# sourceMappingURL=MultiViewModal.store.js.map