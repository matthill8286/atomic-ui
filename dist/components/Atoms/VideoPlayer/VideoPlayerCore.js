function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { SkeletonBlockItem } from "../Skeleton";
import { StyledVideoPlayer, StyledVideoWrapper } from "./VideoPlayer.styled";
export var VideoPlayerCore = function VideoPlayerCore(_ref) {
  var _ref$title = _ref.title,
      title = _ref$title === void 0 ? 'core video player' : _ref$title,
      _ref$videoId = _ref.videoId,
      videoId = _ref$videoId === void 0 ? 'player-core' : _ref$videoId,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? '100%' : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? '100%' : _ref$height,
      url = _ref.url,
      _ref$pip = _ref.pip,
      pip = _ref$pip === void 0 ? false : _ref$pip,
      _ref$controls = _ref.controls,
      controls = _ref$controls === void 0 ? true : _ref$controls,
      _ref$light = _ref.light,
      light = _ref$light === void 0 ? false : _ref$light,
      _ref$loop = _ref.loop,
      loop = _ref$loop === void 0 ? false : _ref$loop,
      loading = _ref.loading,
      _ref$playbackRate = _ref.playbackRate,
      playbackRate = _ref$playbackRate === void 0 ? 1 : _ref$playbackRate,
      playing = _ref.playing,
      _ref$volume = _ref.volume,
      volume = _ref$volume === void 0 ? 0.6 : _ref$volume,
      _ref$muted = _ref.muted,
      muted = _ref$muted === void 0 ? false : _ref$muted,
      _ref$allowfullscreen = _ref.allowfullscreen,
      allowfullscreen = _ref$allowfullscreen === void 0 ? false : _ref$allowfullscreen,
      _ref$rounded = _ref.rounded,
      rounded = _ref$rounded === void 0 ? false : _ref$rounded,
      _ref$stopOnUnmount = _ref.stopOnUnmount,
      stopOnUnmount = _ref$stopOnUnmount === void 0 ? true : _ref$stopOnUnmount,
      maxHeight = _ref.maxHeight,
      onStart = _ref.onStart,
      onPause = _ref.onPause,
      onPlay = _ref.onPlay,
      onError = _ref.onError,
      onEnded = _ref.onEnded,
      onProgress = _ref.onProgress,
      onDuration = _ref.onDuration,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["title", "videoId", "width", "height", "url", "pip", "controls", "light", "loop", "loading", "playbackRate", "playing", "volume", "muted", "allowfullscreen", "rounded", "stopOnUnmount", "maxHeight", "onStart", "onPause", "onPlay", "onError", "onEnded", "onProgress", "onDuration", "children"]);

  if (loading) {
    return React.createElement(SkeletonBlockItem, {
      height: "350px"
    });
  }

  var containerRef = useRef(null);

  var _useState = useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      videoViewer = _useState2[0],
      setVideoViewer = _useState2[1];

  var _useInView = useInView({
    threshold: 0.3
  }),
      _useInView2 = _slicedToArray(_useInView, 2),
      ref = _useInView2[0],
      inView = _useInView2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      loaded = _useState4[0],
      setLoaded = _useState4[1];

  var id = "video-player-container-".concat(videoId);

  var _onStart = useCallback(function (cb) {
    return onStart === null || onStart === void 0 ? void 0 : onStart(cb);
  }, []);

  var _onEnded = useCallback(function (event) {
    return onEnded === null || onEnded === void 0 ? void 0 : onEnded(event);
  }, []);

  var _onPlay = useCallback(function (event) {
    return onPlay === null || onPlay === void 0 ? void 0 : onPlay(event);
  }, []);

  var _onDuration = useCallback(function (event) {
    return onDuration === null || onDuration === void 0 ? void 0 : onDuration(event);
  }, []);

  var _onPause = useCallback(function (event) {
    return onPause === null || onPause === void 0 ? void 0 : onPause(event);
  }, []);

  var _onProgress = useCallback(function (state) {
    onProgress === null || onProgress === void 0 ? void 0 : onProgress(state);
  }, []);

  var _onError = useCallback(function (event) {
    return onError === null || onError === void 0 ? void 0 : onError(event);
  }, []);

  useEffect(function () {
    videoViewer === null || videoViewer === void 0 ? void 0 : videoViewer.onStart(function () {
      if (!loaded) {
        setLoaded(true);
      }
    });
  }, [videoViewer]);
  useEffect(function () {
    var _document$fullscreenE;

    if (document.fullscreenElement !== null && (document.fullscreenElement === true || ((_document$fullscreenE = document.fullscreenElement) === null || _document$fullscreenE === void 0 ? void 0 : _document$fullscreenE.canPlayType) !== undefined)) {
      return;
    }

    if (loaded && !inView) {
      videoViewer === null || videoViewer === void 0 ? void 0 : videoViewer.stop();
    }
  }, [inView]);
  return React.createElement(StyledVideoWrapper, {
    aspect: "16/9",
    ref: containerRef
  }, React.createElement(StyledVideoPlayer, {
    id: id,
    width: width,
    ref: videoViewer,
    height: height,
    url: url,
    pip: pip,
    playing: playing,
    controls: controls,
    rounded: rounded !== null && rounded !== void 0 ? rounded : undefined,
    light: light,
    loop: loop,
    playbackRate: playbackRate,
    volume: volume,
    muted: muted,
    onStart: _onStart,
    onPlay: _onPlay,
    onPause: _onPause,
    onProgress: _onProgress,
    onError: _onError,
    onDuration: _onDuration
  }), React.createElement("div", {
    id: id,
    ref: ref
  }));
};
//# sourceMappingURL=VideoPlayerCore.js.map