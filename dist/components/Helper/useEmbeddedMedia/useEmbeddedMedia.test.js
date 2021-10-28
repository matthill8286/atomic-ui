function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { renderHook } from '@testing-library/react-hooks';
import { newAssetMocks } from "../../Organisms/AssetTile";
import { useEmbeddedMedia } from "./useEmbeddedMedia";
describe('useEmbeddedMedia hook', function () {
  var asset;
  beforeEach(function () {
    asset = _objectSpread({}, newAssetMocks[0]);
  });
  describe('with embedding turned on', function () {
    test('will return valid Youtube links', function () {
      var _renderHook = renderHook(function () {
        return useEmbeddedMedia(_objectSpread(_objectSpread({}, asset), {}, {
          embedVideoURL: 'https://www.youtube.com/watch?v=5fI3zz2cp3k'
        }));
      }),
          result = _renderHook.result;

      expect(result.current).toBe('https://www.youtube.com/embed/5fI3zz2cp3k?showinfo=0');
    });
    test('will also parse Youtu.be links', function () {
      var _renderHook2 = renderHook(function () {
        return useEmbeddedMedia(_objectSpread(_objectSpread({}, asset), {}, {
          embedVideoURL: 'https://youtu.be/5fI3zz2cp3k'
        }));
      }),
          result = _renderHook2.result;

      expect(result.current).toBe('https://www.youtube.com/embed/5fI3zz2cp3k?showinfo=0');
    });
    test('will return valid Vimeo links', function () {
      var _renderHook3 = renderHook(function () {
        return useEmbeddedMedia(_objectSpread(_objectSpread({}, asset), {}, {
          embedVideoURL: 'https://vimeo.com/242805528'
        }));
      }),
          result = _renderHook3.result;

      expect(result.current).toBe('https://player.vimeo.com/video/242805528?title=false&texttrack=false&quality=240p&byline=false');
    });
    test('will not mangle well-formed Vimeo links', function () {
      var _renderHook4 = renderHook(function () {
        return useEmbeddedMedia(_objectSpread(_objectSpread({}, asset), {}, {
          embedVideoURL: 'https://player.vimeo.com/video/518498094'
        }));
      }),
          result = _renderHook4.result;

      expect(result.current).toBe('https://player.vimeo.com/video/518498094?title=false&texttrack=false&quality=240p&byline=false');
    });
    test('will return valid Vimeo event links', function () {
      var _renderHook5 = renderHook(function () {
        return useEmbeddedMedia(_objectSpread(_objectSpread({}, asset), {}, {
          embedVideoURL: 'https://vimeo.com/event/428541'
        }));
      }),
          result = _renderHook5.result;

      expect(result.current).toBe('https://vimeo.com/event/428541');
    });
    test('will return valid Ted Talk links', function () {
      var _renderHook6 = renderHook(function () {
        return useEmbeddedMedia(_objectSpread(_objectSpread({}, asset), {}, {
          embedVideoURL: 'https://www.ted.com/talks/adam_grant_the_surprising_habits_of_original_thinkers'
        }));
      }),
          result = _renderHook6.result;

      expect(result.current).toBe('https://embed.ted.com/talks/adam_grant_the_surprising_habits_of_original_thinkers');
    });
    test('will return only https:// links', function () {
      var _renderHook7 = renderHook(function () {
        return useEmbeddedMedia(_objectSpread(_objectSpread({}, asset), {}, {
          embedVideoURL: 'http://vimeo.com/event/428541/embed'
        }));
      }),
          result = _renderHook7.result;

      expect(result.current).toBe('https://vimeo.com/event/428541/embed');
    });
    test('will add https:// if missing', function () {
      var _renderHook8 = renderHook(function () {
        return useEmbeddedMedia(_objectSpread(_objectSpread({}, asset), {}, {
          embedVideoURL: 'vimeo.com/event/428541/embed'
        }));
      }),
          result = _renderHook8.result;

      expect(result.current).toBe('https://vimeo.com/event/428541/embed');
    });
    test("will return image url when embedVideoURL isn't valid", function () {
      var _renderHook9 = renderHook(function () {
        return useEmbeddedMedia(_objectSpread(_objectSpread({}, asset), {}, {
          embedVideoURL: ''
        }));
      }),
          result = _renderHook9.result;

      expect(result.current).toBe(asset.image);
    });
  });
});
//# sourceMappingURL=useEmbeddedMedia.test.js.map