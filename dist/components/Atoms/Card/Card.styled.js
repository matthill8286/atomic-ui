import { darken } from 'polished';
import { media } from "../../../styles";
import { css, styled } from "../../../styles/styled";
import { Picture } from "../Picture";
export var StyledBadgeLineWrapper = styled.div.withConfig({
  displayName: "Cardstyled__StyledBadgeLineWrapper",
  componentId: "sorzme-0"
})(["position:absolute;left:0;top:-14px;max-width:100%;z-index:1;", "{> div > div:nth-child(n + 3){display:none;}}"], media.maxMd);

var handleElevation = function handleElevation(elevation) {
  var surface = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'white';
  return function (_ref) {
    var theme = _ref.theme;

    if (surface === 'selected') {
      var elevationAsStyleString = elevation ? "".concat(theme.dimension["elevationLevel".concat(elevation)], ", ") : '';
      return "".concat(elevationAsStyleString, "inset 0px 0px 0px 2px ").concat(theme.color.primary);
    }

    return theme.dimension["elevationLevel".concat(elevation)];
  };
};

export var handlePadding = function handlePadding(baseSpacing, padding) {
  var paddingCss = '';
  var responsivePaddingCss = '';
  var _ref2 = padding,
      top = _ref2.top,
      right = _ref2.right,
      bottom = _ref2.bottom,
      left = _ref2.left;
  var overallPadding = padding;
  var _ref3 = padding,
      mobile = _ref3.mobile,
      tablet = _ref3.tablet,
      desktop = _ref3.desktop;

  if (overallPadding && baseSpacing[overallPadding]) {
    paddingCss = "padding: ".concat(baseSpacing[overallPadding], ";");
  }

  if (top) {
    responsivePaddingCss = responsivePaddingCss + "padding-top: ".concat(baseSpacing[top], ";");
  }

  if (right) {
    responsivePaddingCss = responsivePaddingCss + "padding-right: ".concat(baseSpacing[right], ";");
  }

  if (bottom) {
    responsivePaddingCss = responsivePaddingCss + "padding-bottom: ".concat(baseSpacing[bottom], ";");
  }

  if (left) {
    responsivePaddingCss = responsivePaddingCss + "padding-left: ".concat(baseSpacing[left], ";");
  }

  if (mobile) {
    paddingCss = paddingCss + "".concat(media.mobile, " {padding: ").concat(baseSpacing[mobile], "; ").concat(responsivePaddingCss, "};");
  }

  if (tablet) {
    paddingCss = paddingCss + "".concat(media.tablet, " {padding: ").concat(baseSpacing[tablet], "; ").concat(responsivePaddingCss, "};");
  }

  if (desktop) {
    paddingCss = paddingCss + "".concat(media.desktop, " {padding: ").concat(baseSpacing[desktop], "; ").concat(responsivePaddingCss, "};");
  }

  return paddingCss || responsivePaddingCss;
};
export var handleMargin = function handleMargin(baseSpacing, margin) {
  var marginCss = '';
  var responsiveMarginCss = '';
  var _ref4 = margin,
      top = _ref4.top,
      right = _ref4.right,
      bottom = _ref4.bottom,
      left = _ref4.left;
  var overallMargin = margin;
  var _ref5 = margin,
      mobile = _ref5.mobile,
      tablet = _ref5.tablet,
      desktop = _ref5.desktop;

  if (overallMargin && baseSpacing[overallMargin]) {
    marginCss = "margin: ".concat(baseSpacing[overallMargin], ";");
  }

  if (top) {
    responsiveMarginCss = responsiveMarginCss + "margin-top: ".concat(baseSpacing[top], ";");
  }

  if (right) {
    responsiveMarginCss = responsiveMarginCss + "margin-right: ".concat(baseSpacing[right], ";");
  }

  if (bottom) {
    responsiveMarginCss = responsiveMarginCss + "margin-bottom: ".concat(baseSpacing[bottom], ";");
  }

  if (left) {
    responsiveMarginCss = responsiveMarginCss + "margin-left: ".concat(baseSpacing[left], ";");
  }

  if (mobile) {
    marginCss = marginCss + "".concat(media.mobile, " {margin: ").concat(baseSpacing[mobile], "; ").concat(responsiveMarginCss, "};");
  }

  if (tablet) {
    marginCss = marginCss + "".concat(media.tablet, " {margin: ").concat(baseSpacing[tablet], "; ").concat(responsiveMarginCss, "};");
  }

  if (desktop) {
    marginCss = marginCss + "".concat(media.desktop, " {margin: ").concat(baseSpacing[desktop], "; ").concat(responsiveMarginCss, "};");
  }

  return marginCss || responsiveMarginCss;
};

var handleBorder = function handleBorder(surface, borderWidth, borderColor) {
  return function (_ref6) {
    var theme = _ref6.theme;
    var surfaces = {
      white: theme.color.grey2,
      clear: theme.color.grey2,
      grey: theme.color.grey2,
      black: theme.color.grey5,
      primary: theme.color.primary,
      selected: theme.color.selected
    };
    var finalBorderColor;

    if (borderColor) {
      finalBorderColor = theme.color[borderColor];
    } else if (surface === 'primary') {
      finalBorderColor = darken(theme.polished.darken, theme.color.primary);
    } else {
      finalBorderColor = surfaces[surface];
    }

    return "".concat(borderWidth, "px solid ").concat(finalBorderColor);
  };
};

var handleColor = function handleColor(textColor, surface) {
  return function (_ref7) {
    var theme = _ref7.theme;

    switch (surface) {
      case 'black':
      case 'primary':
        return theme.color.white;

      case 'selected':
        return theme.color.black;

      default:
        return theme.color[textColor || 'black'];
    }
  };
};

var isCornersShape = function isCornersShape(shape) {
  var typedShape = shape;
  return !!typedShape.bottomLeft || !!typedShape.bottomRight || !!typedShape.topLeft || !!typedShape.topRight;
};

export var handleShape = function handleShape(shape) {
  return function (_ref8) {
    var theme = _ref8.theme;
    var borders = {
      sharp: theme.dimension.borderRadius0,
      'rounded-small': theme.dimension.borderRadius1,
      'rounded-big': theme.dimension.borderRadius2,
      'rounded-xl': theme.dimension.borderRadius3
    };

    if (isCornersShape(shape)) {
      var bottomRight = shape.bottomRight,
          bottomLeft = shape.bottomLeft,
          topLeft = shape.topLeft,
          topRight = shape.topRight;
      return "\n        ".concat(topLeft && "border-top-left-radius: ".concat(borders[topLeft], ";"), "\n        ").concat(topRight && "border-top-right-radius: ".concat(borders[topRight], ";"), "\n        ").concat(bottomLeft && "border-bottom-left-radius: ".concat(borders[bottomLeft], ";"), "\n        ").concat(bottomRight && "border-bottom-right-radius: ".concat(borders[bottomRight], ";"), "\n      ");
    } else {
      return "border-radius: ".concat(borders[shape], ";");
    }
  };
};

var handleSurface = function handleSurface(surface) {
  return function (_ref9) {
    var theme = _ref9.theme;
    var surfaces = {
      white: theme.color.white,
      grey: theme.color.grey4,
      black: theme.color.grey6,
      primary: theme.color.primary,
      selected: theme.color.white
    };
    return 'background-color: ' + surfaces[surface ? surface : 'white'] + ';';
  };
};

var handleNoBorder = function handleNoBorder(noBorder) {
  if (noBorder === 'none') {
    return "border: none;";
  }

  if (Array.isArray(noBorder)) {
    return noBorder.map(function (position) {
      return "border-".concat(position, "-width: 0px;");
    }).join('');
  } else {
    return "border-".concat(noBorder, "-width: 0px;");
  }
};

var handleElevationHover = function handleElevationHover(elevationHover, elevation, surface) {
  return css(["cursor:pointer;transition-duration:0.15s;transition-timing-function:ease-in-out;transition-property:border-color,box-shadow,transform;", "{&:hover{transform:", ";box-shadow:", ";border-color:rgba(0,0,0,0);}}"], media.tablet, elevationHover > 0 && elevationHover !== elevation ? 'translateY(-1px)' : 'none', handleElevation(elevationHover, surface));
};

export var StyledCard = styled.div.withConfig({
  displayName: "Cardstyled__StyledCard",
  componentId: "sorzme-1"
})(function (_ref10) {
  var borderColor = _ref10.borderColor,
      borderWidth = _ref10.borderWidth,
      center = _ref10.center,
      display = _ref10.display,
      elevation = _ref10.elevation,
      elevationHover = _ref10.elevationHover,
      margin = _ref10.margin,
      noBorder = _ref10.noBorder,
      overflow = _ref10.overflow,
      padding = _ref10.padding,
      cardHeight = _ref10.cardHeight,
      flexDirection = _ref10.flexDirection,
      shape = _ref10.shape,
      surface = _ref10.surface,
      textColor = _ref10.textColor,
      theme = _ref10.theme;
  return css(["", ";", ";box-sizing:border-box;line-height:1.43;overflow:", ";", ";", ";box-shadow:", ";color:", ";border:", ";", " ", " ", " ", " ", " height:", ";width:100%;h1,h2,h3,h4,h5,h6{color:", ";}"], display && "display: ".concat(display, ";"), flexDirection && "flex-direction: ".concat(flexDirection, ";"), overflow ? overflow : 'hidden', !!padding && handlePadding(theme.spacing.base, padding), !!margin && handleMargin(theme.spacing.base, margin), handleElevation(elevation, surface), handleColor(textColor, surface), elevation === 0 && handleBorder(surface !== null && surface !== void 0 ? surface : 'white', borderWidth, borderColor), surface && handleSurface(surface), noBorder && handleNoBorder(noBorder), !!elevationHover && handleElevationHover(elevationHover, elevation, surface), shape && handleShape(shape), center && "text-align: center;", cardHeight ? cardHeight : '100%', (surface === 'grey' || surface === 'primary' || surface === 'black') && theme.color.white);
});
export var StyledFeaturedAssetsPicture = styled(Picture).withConfig({
  displayName: "Cardstyled__StyledFeaturedAssetsPicture",
  componentId: "sorzme-2"
})(["& img{display:block;max-width:128px !important;}"]);
export var StyledFeaturedAssetsContainer = styled.div.withConfig({
  displayName: "Cardstyled__StyledFeaturedAssetsContainer",
  componentId: "sorzme-3"
})(["display:none;", "{position:absolute;display:flex;z-index:1;right:0;top:-24px;justify-content:flex-end;}"], media.tablet);
export var StyledFeaturedAssetSpacing = styled.div.withConfig({
  displayName: "Cardstyled__StyledFeaturedAssetSpacing",
  componentId: "sorzme-4"
})(function (_ref11) {
  var theme = _ref11.theme;
  return css(["margin-left:", ";"], theme.spacing.base.xs);
});
export var StyledDivider = styled.div.withConfig({
  displayName: "Cardstyled__StyledDivider",
  componentId: "sorzme-5"
})(function (_ref12) {
  var dividerWidth = _ref12.dividerWidth,
      theme = _ref12.theme;
  return css(["position:absolute;bottom:1px;left:calc(calc(100% - ", ") / 2);display:flex;width:", ";margin:0 auto;z-index:1;background:", ";height:1px;"], dividerWidth, dividerWidth, theme.color.grey2);
});
export var StyledCardWrapper = styled.div.withConfig({
  displayName: "Cardstyled__StyledCardWrapper",
  componentId: "sorzme-6"
})(["position:relative;outline:none;width:100%;", "{transition-duration:0.15s;transition-timing-function:ease-in-out;transition-property:transform;}", "{&:hover{", ",", "{transform:", ";}}}", " ", ""], StyledBadgeLineWrapper, media.tablet, StyledBadgeLineWrapper, StyledFeaturedAssetsContainer, function (_ref13) {
  var elevationHover = _ref13.elevationHover;
  return elevationHover && elevationHover > 0 ? 'translateY(-1px)' : 'none';
}, function (_ref14) {
  var fullHeight = _ref14.fullHeight;
  return fullHeight && css(["height:100%;"]);
}, function (_ref15) {
  var cardHeight = _ref15.cardHeight;
  return cardHeight && css(["height:", ";"], cardHeight);
});
//# sourceMappingURL=Card.styled.js.map