import React from 'react'
import { ThemeProvider as Provider } from 'styled-components'
import { saiyanTheme } from './sc-vars-saiyan'

type theme = typeof saiyanTheme

interface ThemeProviderProps {
  children: React.ReactNode
  theme: theme
}

export const ThemeProvider: React.FC<ThemeProviderProps> = props => {
  // TODO: Define a Namespace so we don't collide with other Themes
  // const theme = {
  //   myComponentLib: props.theme,
  //   // Namespace the theme for the user
  // };
  const mergedTheme = Object.assign({}, saiyanTheme, props.theme)
  return <Provider theme={mergedTheme}>{props.children}</Provider>
}
