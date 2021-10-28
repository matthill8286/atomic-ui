import { useEffect, useRef } from 'react';
export var useOutsideClick = function useOutsideClick(callback) {
  var callbackRef = useRef();
  var innerRef = useRef();
  useEffect(function () {
    callbackRef.current = callback;
  });
  useEffect(function () {
    document.addEventListener('click', handleClick);
    return function () {
      return document.removeEventListener('click', handleClick);
    };

    function handleClick(e) {
      if (innerRef.current && callbackRef.current && !innerRef.current.contains(e.target)) {
        callbackRef.current(e);
      }
    }
  }, []);
  return innerRef;
};
//# sourceMappingURL=useOutsideClick.js.map