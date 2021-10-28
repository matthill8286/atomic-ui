function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

export var MATCH_YOUTUBE = /(?:youtu\.be\/|youtube(?:-nocookie)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//;
export var MATCH_SOUNDCLOUD = /(?:soundcloud\.com|snd\.sc)\/[^.]+$/;
export var MATCH_VIMEO = /vimeo\.com\/.+/;
export var MATCH_VIMEO_LIVESTREAM = /vimeo\.com\/event\/.+/;
export var MATCH_TED = /embed\.ted\.com\/.+/;
export var MATCH_FACEBOOK = /^https?:\/\/(www\.)?facebook\.com.*\/(video(s)?|watch|story)(\.php?|\/).+$/;
export var MATCH_FACEBOOK_WATCH = /^https?:\/\/fb\.watch\/.+$/;
export var MATCH_STREAMABLE = /streamable\.com\/([a-z0-9]+)$/;
export var MATCH_MIX_CLOUD = /mixcloud\.com\/([^/]+\/[^/]+)/;
export var AUDIO_EXTENSIONS = /\.(m4a|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i;
export var VIDEO_EXTENSIONS = /\.(mp4|og[gv]|webm|mov|m4v)($|\?)/i;
export var HLS_EXTENSIONS = /\.(m3u8)($|\?)/i;
export var DASH_EXTENSIONS = /\.(mpd)($|\?)/i;
export var FLV_EXTENSIONS = /\.(flv)($|\?)/;

var canPlayFile = function canPlayFile(url) {
  if (url instanceof Array) {
    var _iterator = _createForOfIteratorHelper(url),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var item = _step.value;

        if (typeof item === 'string' && canPlayFile(item)) {
          return true;
        }

        if (canPlayFile(item.src)) {
          return true;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return false;
  }

  return AUDIO_EXTENSIONS.test(url) || VIDEO_EXTENSIONS.test(url) || HLS_EXTENSIONS.test(url) || DASH_EXTENSIONS.test(url) || FLV_EXTENSIONS.test(url);
};

export var canPlay = {
  youtube: function youtube(url) {
    if (url instanceof Array) {
      return url.every(function (item) {
        return MATCH_YOUTUBE.test(item);
      });
    }

    return MATCH_YOUTUBE.test(url);
  },
  soundcloud: function soundcloud(url) {
    return MATCH_SOUNDCLOUD.test(url) && !AUDIO_EXTENSIONS.test(url);
  },
  vimeo: function vimeo(url) {
    return MATCH_VIMEO.test(url) && !MATCH_VIMEO_LIVESTREAM.test(url) && !VIDEO_EXTENSIONS.test(url) && !HLS_EXTENSIONS.test(url);
  },
  livestream: function livestream(url) {
    return MATCH_VIMEO_LIVESTREAM.test(url) && !VIDEO_EXTENSIONS.test(url) && !HLS_EXTENSIONS.test(url);
  },
  ted: function ted(url) {
    return MATCH_TED.test(url) && !VIDEO_EXTENSIONS.test(url) && !HLS_EXTENSIONS.test(url);
  },
  facebook: function facebook(url) {
    return MATCH_FACEBOOK.test(url) || MATCH_FACEBOOK_WATCH.test(url);
  },
  streamable: function streamable(url) {
    return MATCH_STREAMABLE.test(url);
  },
  mixcloud: function mixcloud(url) {
    return MATCH_MIX_CLOUD.test(url);
  },
  file: canPlayFile
};
export var format = function format(seconds) {
  var date = new Date(seconds * 1000);
  var hh = date.getUTCHours();
  var mm = date.getUTCMinutes();
  var ss = pad(date.getUTCSeconds());

  if (hh) {
    return "".concat(hh, ":").concat(pad(mm), ":").concat(ss);
  }

  return "".concat(mm, ":").concat(ss);
};

var pad = function pad(string) {
  return ('0' + string).slice(-2);
};

export var duration = function duration(_duration) {
  return format(_duration);
};
export var elapsed = function elapsed(duration, played) {
  return format(duration * played);
};
export var remaining = function remaining(duration, played) {
  return format(duration * (1 - played));
};
//# sourceMappingURL=index.js.map