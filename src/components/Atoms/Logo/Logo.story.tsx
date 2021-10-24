import { boolean } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import React, { FunctionComponent, useContext } from 'react'
import { styled, ThemeContext } from '@/styles/styled'
import { Logo } from './Logo'

interface StyledBackgroundProps {
  color?: 'black' | 'white' | 'primary'
}

const StyledBackground = styled.div<StyledBackgroundProps>`
  padding: 1em;
  background-color: ${({ color, theme }) => {
    const colors = {
      white: theme.color.white,
    }
    return color ? colors[color] : theme.header.background
  }};
`

const LogoStory: FunctionComponent = (): JSX.Element => {
  const { name } = useContext(ThemeContext)
  if (name === 'Saiyan') {
    return (
      <>
        <StyledBackground color="white">
          <Logo white={boolean('Variant: white', false)} />
        </StyledBackground>
      </>
    )
  }
  return (
    <StyledBackground color="white">
      <Logo
        white={boolean('Variant: white', false)}
        uni={boolean('Whole logo in one color', false)}
      />
    </StyledBackground>
  )
}

storiesOf('Design System/Atoms/Logo', module).add('Saiyan', () => <LogoStory />)
