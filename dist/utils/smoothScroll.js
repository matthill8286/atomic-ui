export var smoothScrollWithElement = function smoothScrollWithElement(element) {
  var scrollOffset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  if (element) {
    window.scroll({
      top: element.offsetTop - scrollOffset,
      behavior: 'smooth'
    });
  }
};
export var smoothScrollWithSelector = function smoothScrollWithSelector(selector, scrollOffset) {
  var element = document.querySelector(selector);

  if (element) {
    smoothScrollWithElement(element, scrollOffset);
  }
};
export var smoothScrollWithEvent = function smoothScrollWithEvent(event, scrollOffset) {
  var _event$currentTarget;

  event.preventDefault();
  smoothScrollWithSelector((event === null || event === void 0 ? void 0 : (_event$currentTarget = event.currentTarget) === null || _event$currentTarget === void 0 ? void 0 : _event$currentTarget.getAttribute('href')) || '#', scrollOffset);
};
//# sourceMappingURL=smoothScroll.js.map