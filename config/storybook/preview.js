import { withInfo } from '@storybook/addon-info'
import { withKnobs } from '@storybook/addon-knobs'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { themes } from '@storybook/theming'
import * as React from 'react'
import StoryRouter from 'storybook-react-router'
import { withThemesProvider } from 'themeprovider-storybook'

import { GlobalStyle } from '../../src'
import { saiyanTheme as saiyanStyles } from '../../src/styles/sc-vars-saiyan'
import { alternateTheme as alternateStyles } from '../../src/styles/sc-vars-alternate'

const newViewports = {
  forPreview: {
    name: 'For Preview',
    styles: {
      width: '375px',
      height: '100%',
    },
  },
  xsView: {
    name: 'XS View',
    styles: {
      width: '511px',
      height: '100%',
    },
  },
  smView: {
    name: 'SM View',
    styles: {
      width: '751px',
      height: '100%',
    },
  },
  mdView: {
    name: 'MD View',
    styles: {
      width: '1007px',
      height: '100%',
    },
  },
  lgView: {
    name: 'LG View',
    styles: {
      width: '1231px',
      height: '100%',
    },
  },
  xlView: {
    name: 'XL View',
    styles: {
      width: '1471px',
      height: '100%',
    },
  },
}

const saiyanTheme = {
  name: 'Saiyan',
  ...saiyanStyles,
}

const alternateTheme = {
  name: 'Alternate',
  ...alternateStyles,
}

const clientSkins = [saiyanTheme, alternateTheme]

const withGlobal = content => (
  <React.Fragment>
    <GlobalStyle />
    {content()}
  </React.Fragment>
)

export const parameters = {
  options: {
    panelPosition: 'bottom',
    theme: themes.light,
  },
  viewport: { viewports: { ...INITIAL_VIEWPORTS, ...newViewports } },
}

export const decorators = [
  withKnobs,
  withGlobal,
  StoryRouter(),
  withInfo({
    header: false,
    inline: true,
  }),
  withThemesProvider(clientSkins),
]
