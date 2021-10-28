import React from 'react';
import { Overline } from "./";
export default {
  title: 'Design System/Atoms/Overline',
  component: Overline
};

var Template = function Template(args) {
  return React.createElement(Overline, args);
};

export var OverlineStory = Template.bind({});
OverlineStory.args = {
  className: 'the-overline-news'
};
OverlineStory.argTypes = {
  className: {
    options: ['the-overline-services', 'the-overline-home', 'the-overline-news', 'the-overline-testimonials', 'the-overline-featured', 'the-overline-contact'],
    control: {
      type: 'select'
    }
  }
};
//# sourceMappingURL=Overline.story.js.map