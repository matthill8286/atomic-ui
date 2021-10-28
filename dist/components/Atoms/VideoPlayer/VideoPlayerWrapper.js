function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import { SkeletonBlockItem } from "../Skeleton";
import { EmbeddedWrapper } from "../EmbeddedPlayer";
import { VideoPlayerCore } from "./VideoPlayerCore";
export var VideoPlayerWrapper = function VideoPlayerWrapper(_ref) {
  var _ref$title = _ref.title,
      title = _ref$title === void 0 ? 'core video player' : _ref$title,
      unsupportedMedia = _ref.unsupportedMedia,
      _ref$context = _ref.context,
      context = _ref$context === void 0 ? 'page' : _ref$context,
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
      props = _objectWithoutProperties(_ref, ["title", "unsupportedMedia", "context", "videoId", "width", "height", "url", "pip", "controls", "light", "loop", "loading", "playbackRate", "playing", "volume", "muted", "allowfullscreen", "rounded", "stopOnUnmount", "maxHeight", "onStart", "onPause", "onPlay", "onError", "onEnded", "onProgress", "onDuration", "children"]);

  if (loading) {
    return React.createElement(SkeletonBlockItem, {
      height: "350px"
    });
  }

  if (unsupportedMedia) {
    return React.createElement(EmbeddedWrapper, {
      height: height,
      aspect: "16/9",
      width: width,
      embedUrl: url,
      title: title,
      allowfullscreen: false
    });
  }

  return React.createElement(VideoPlayerCore, {
    videoId: videoId,
    width: width,
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
    onStart: onStart,
    onPlay: onPlay,
    onPause: onPause,
    onProgress: onProgress,
    onError: onError,
    onDuration: onDuration
  });
};
//# sourceMappingURL=VideoPlayerWrapper.js.map