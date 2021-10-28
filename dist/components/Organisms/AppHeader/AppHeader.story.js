import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { SearchDropdown } from "../../Molecules/SearchDropdown";
import { AppHeaderComponent } from "./";
export var navigationListMockItems = [{
  actionLabel: 'Profile',
  to: '/',
  links: []
}, {
  actionLabel: 'Comments',
  to: '/',
  links: []
}, {
  actionLabel: 'Goals',
  to: '/',
  links: [{
    actionLabel: 'Profile',
    to: '/',
    links: []
  }, {
    actionLabel: 'Comments',
    to: '/',
    links: []
  }, {
    actionLabel: 'Goals',
    to: '/',
    links: []
  }]
}, {
  actionLabel: 'Progress',
  to: '/',
  links: []
}];
var defaultLanguages = [{
  id: 0,
  label: 'Dutch'
}, {
  id: 1,
  label: 'English'
}, {
  id: 2,
  label: 'French'
}];
var headerContent = {
  id: '',
  links: [].concat(navigationListMockItems),
  searchBarEnabled: true,
  searchBarLabel: 'Search',
  filter: {
    enabled: true,
    placeholder: 'Filter'
  }
};
storiesOf('Design System/Organisms/AppHeader', module).add('Default', function () {
  return React.createElement(AppHeaderComponent, {
    logoRef: {
      url: '',
      alt: ''
    },
    button: {
      href: '',
      actionLabel: 'Log Out'
    },
    languages: defaultLanguages,
    renderSearchBar: React.createElement(SearchDropdown, {
      index: 0,
      inputValue: '',
      options: [],
      onSelectChange: function onSelectChange() {
        return null;
      },
      onInputChange: function onInputChange() {
        return null;
      }
    }),
    headerContent: headerContent,
    logoUrl: "https://wac-cdn.atlassian.com/dam/jcr:e9ef90f9-c84a-4cba-af2f-9aa7d683ede3/Jira%20Integration.svg?cdnVersion=1324",
    onLogoClick: action('click')
  });
});
//# sourceMappingURL=AppHeader.story.js.map