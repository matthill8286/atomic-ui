export var withTernary = function withTernary(_ref, asset) {
  var conditionA = _ref.conditionA;
  return conditionA ? asset === null || asset === void 0 ? void 0 : asset.embedVideoURL : asset === null || asset === void 0 ? void 0 : asset.image;
};

var addHttps = function addHttps(url) {
  if (/http:\/\//i.test(url)) {
    return url.split(/http:\/\//i).join('https://');
  }

  if (!/http/i.test(url)) {
    return 'https://'.concat(url);
  }

  return null;
};

var addEmbeddedMedia = function addEmbeddedMedia(asset, canBeEmbedded) {
  var _addHttps;

  var url = withTernary({
    conditionA: canBeEmbedded
  }, asset);
  var sanitisedUrl = (_addHttps = addHttps(url)) !== null && _addHttps !== void 0 ? _addHttps : url;

  if (/youtube\.com/i.test(sanitisedUrl)) {
    return sanitisedUrl.split(/watch\?v=/i).join('embed/') + '?showinfo=0';
  }

  if (/youtu\.be/i.test(sanitisedUrl)) {
    return "https://www.youtube.com/embed/".concat(sanitisedUrl.split('/')[3], "?showinfo=0");
  }

  if (/player\.vimeo\.com\/video\//i.test(sanitisedUrl)) {
    return "".concat(sanitisedUrl, "?title=false&texttrack=false&quality=240p&byline=false");
  }

  if (/vimeo\.com\/(?!event)/i.test(sanitisedUrl)) {
    return "https://player.vimeo.com/video/".concat(sanitisedUrl.split('/')[3], "?title=false&texttrack=false&quality=240p&byline=false");
  }

  if (/vimeo\.com\/event/i.test(sanitisedUrl)) {
    return sanitisedUrl;
  }

  if (/ted\.com/i.test(sanitisedUrl)) {
    return sanitisedUrl.split(/www/i).join('embed');
  }

  return sanitisedUrl;
};

export var useEmbeddedMedia = function useEmbeddedMedia(asset) {
  return addEmbeddedMedia(asset, (asset === null || asset === void 0 ? void 0 : asset.embedVideoURL) !== '');
};
//# sourceMappingURL=useEmbeddedMedia.js.map