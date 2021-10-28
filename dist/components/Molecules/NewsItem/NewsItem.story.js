import React from 'react';
import { NewsItem } from "./NewsItem";
import { styled } from "../../../styles";
var NewsItemWrapper = styled.div.withConfig({
  displayName: "NewsItemstory__NewsItemWrapper",
  componentId: "t4cyvy-0"
})(["max-width:350px;margin:0 auto;"]);
export default {
  title: 'Design System/Molecules/NewsItem',
  component: NewsItem
};

var Template = function Template(args) {
  return React.createElement(NewsItemWrapper, null, React.createElement(NewsItem, args));
};

export var NewsItemStory = Template.bind({});
NewsItemStory.args = {
  title: 'Carbon',
  description: 'Vorsteiner Spoiler',
  image: 'public/images/featured_assets/featured_asset_lxp.jpg',
  buttonLink: '#',
  buttonLabel: 'Read More',
  newsText: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown unknown printer took a galley of type and scrambled it to make a type specimen book.',
  date: '21/11/21'
};
NewsItemStory.argTypes = {};
//# sourceMappingURL=NewsItem.story.js.map