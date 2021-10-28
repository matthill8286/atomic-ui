import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { StyleguideGlobe, IconUser } from '@excelwithbusiness/webmobile-svg-library';
import { DropdownButton } from "./DropdownButton";
storiesOf('Design System/Molecules/Dropdown Button', module).add('Default', function () {
  return React.createElement(DropdownButton, {
    isOpen: false,
    label: "Dropdown Label",
    onClick: action('Button Clicked')
  });
}).add('User Button', function () {
  return React.createElement(DropdownButton, {
    width: 35,
    height: 35,
    primaryIcon: React.createElement(IconUser, {
      height: 35,
      width: 35
    }),
    isOpen: false,
    onClick: action('Button Clicked')
  });
}).add('User Button with picture', function () {
  return React.createElement(DropdownButton, {
    width: 35,
    height: 35,
    isOpen: false,
    onClick: action('Button Clicked'),
    pictureSrc: "https://image.shutterstock.com/image-photo/cute-little-red-kitten-sleeps-600w-235089946.jpg"
  });
}).add('Icon Language Button open', function () {
  return React.createElement(DropdownButton, {
    secondaryIcon: true,
    isOpen: true,
    onClick: action('Button Clicked'),
    primaryIcon: React.createElement(StyleguideGlobe, null)
  });
}).add('Icon Language Button closed', function () {
  return React.createElement(DropdownButton, {
    secondaryIcon: true,
    isOpen: false,
    onClick: action('Button Clicked'),
    primaryIcon: React.createElement(StyleguideGlobe, null)
  });
});
//# sourceMappingURL=DropdownButton.story.js.map