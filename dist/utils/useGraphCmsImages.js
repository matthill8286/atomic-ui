function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

import { useInView } from 'react-intersection-observer';
export var DocumentOutput;

(function (DocumentOutput) {
  DocumentOutput["svg"] = "svg";
  DocumentOutput["jpg"] = "jpg";
  DocumentOutput["png"] = "png";
})(DocumentOutput || (DocumentOutput = {}));

export var ImageResizeFit;

(function (ImageResizeFit) {
  ImageResizeFit["clip"] = "clip";
  ImageResizeFit["crop"] = "crop";
  ImageResizeFit["scale"] = "scale";
  ImageResizeFit["max"] = "max";
})(ImageResizeFit || (ImageResizeFit = {}));

function buildTransformations(separator) {
  var args = Array.prototype.slice.call(arguments, 1);
  return args.join(separator);
}

export var getTransformedImageVersion = function getTransformedImageVersion(handle, args) {
  if (args) {
    return "https://media.graphcms.com/".concat(buildTransformations.apply(void 0, ['/'].concat(_toConsumableArray(args))), "/").concat(handle);
  }

  if (handle) {
    return "https://media.graphcms.com/".concat(handle);
  }
};
export var useGraphCmsImages = function useGraphCmsImages(imageHandles) {
  var skip = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var imageArguments = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;

  var _useInView = useInView({
    triggerOnce: true,
    threshold: 0.2
  }),
      _useInView2 = _slicedToArray(_useInView, 2),
      ref = _useInView2[0],
      inView = _useInView2[1];

  var finalImageHandles = imageHandles;

  if (!inView && !skip) {
    finalImageHandles = imageHandles.map(function (image) {
      return getTransformedImageVersion(image, imageArguments);
    });
  }

  return [finalImageHandles, ref];
};
//# sourceMappingURL=useGraphCmsImages.js.map