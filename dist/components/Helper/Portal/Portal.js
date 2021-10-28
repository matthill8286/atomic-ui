import ReactDOM from 'react-dom';
export var Portal = function Portal(_ref) {
  var targetRootId = _ref.targetRootId,
      dataTest = _ref.dataTest,
      children = _ref.children;
  var targetRootElement = document.getElementById(targetRootId);

  if (dataTest) {
    targetRootElement === null || targetRootElement === void 0 ? void 0 : targetRootElement.setAttribute('data-test', dataTest);
  }

  return targetRootElement ? ReactDOM.createPortal(children, targetRootElement) : null;
};
//# sourceMappingURL=Portal.js.map