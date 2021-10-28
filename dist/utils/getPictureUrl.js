var PICTURE_URL = 'assets.mmsrg.com/isr/166325/c1/-';
var PICTURE_RESOLUTION = 'pwa-786_587';
export function getPictureUrl(pictureDoi) {
  var pictureResolution = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : PICTURE_RESOLUTION;
  return "https://".concat(PICTURE_URL, "/").concat(pictureDoi, "/").concat(pictureResolution);
}
//# sourceMappingURL=getPictureUrl.js.map