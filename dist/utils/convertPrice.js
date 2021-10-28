import * as React from 'react';
export var convertPrice = function convertPrice(amount) {
  var currency = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'EUR';
  var freeLabel = arguments.length > 2 ? arguments[2] : undefined;
  var showPlus = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  var locale = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'de-DE';

  if (typeof amount === 'undefined' || amount === null) {
    return null;
  }

  var price;

  if (amount === 0 || amount === '0' || isNaN(amount)) {
    price = React.createElement("span", null, freeLabel);
  } else {
    price = React.createElement("span", null, showPlus ? '+ ' : '', new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currency
    }).format(amount));
  }

  return price;
};
//# sourceMappingURL=convertPrice.js.map