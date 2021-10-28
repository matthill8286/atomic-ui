import React, { memo } from 'react';
import "./style.css";
import { CopyText, Typo } from "../../Atoms/Typography";
export var NewsItem = memo(function (_ref) {
  var image = _ref.image,
      title = _ref.title,
      description = _ref.description,
      date = _ref.date,
      newsText = _ref.newsText,
      buttonLabel = _ref.buttonLabel,
      buttonLink = _ref.buttonLink;
  return React.createElement("div", {
    className: "news-item"
  }, React.createElement("figure", {
    className: "news-content"
  }, React.createElement("img", {
    alt: "News Img",
    src: image
  }), React.createElement("figcaption", null, React.createElement("div", {
    className: "inner-divider-news"
  }), React.createElement("div", {
    className: "the-overline the-overline-news"
  }), React.createElement("div", {
    className: "inner-divider-half"
  }), React.createElement("h3", null, title), React.createElement("div", {
    className: "inner-divider-news-half"
  }), React.createElement("h4", {
    className: "post-all-heading"
  }, description), React.createElement("div", {
    className: "inner-divider-news-half"
  }), React.createElement("h5", null, date), React.createElement("div", {
    className: "inner-divider-news"
  }), React.createElement(CopyText, {
    tag: "div",
    textAlign: "center",
    lineHeight: "md"
  }, newsText), React.createElement("div", {
    className: "inner-divider-news"
  }), React.createElement("div", {
    className: "the-button-wrapper the-button-wrapper-news"
  }, React.createElement("a", {
    "data-toggle": "modal",
    href: buttonLink
  }, React.createElement(Typo, {
    className: "the-button"
  }, buttonLabel))))));
});
//# sourceMappingURL=NewsItem.js.map