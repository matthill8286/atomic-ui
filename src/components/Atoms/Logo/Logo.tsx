import React, { FunctionComponent } from 'react'
import { styled } from '@/styles/styled'
import { Logosaiyan } from '@matthill8286/jsx-icon-library'
import { ThemeColors } from '@/types/theme'

interface LogoProps {
  white?: boolean
  uni?: boolean
  className?: string
}

interface StyledWrapperProps {
  color?: ThemeColors
}

const StyledWrapper = styled.div<StyledWrapperProps>`
  position: relative;
  max-width: 200px;
  fill: ${({ color, theme }) => (color && theme.color[color]) || theme.color.primary};
`

const StyledsaiyanLogo = styled(Logosaiyan)`
  display: block;
  height: 80px;
  width: 100%;
`

export const Logo: FunctionComponent<LogoProps> = ({ white, className, uni }) => {
  return (
    <StyledWrapper color={white ? 'white' : undefined} className={className}>
      <StyledsaiyanLogo />
    </StyledWrapper>
  )
}
