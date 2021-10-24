import React, { FC, ReactElement } from 'react'
import { DropdownProps } from '@/components/Molecules/Dropdown/Dropdown.interface'
import { css, styled } from '@/styles/styled'
import { ThemeColors } from '@/types/theme'
import { CopyText } from '../Typography'
import { InputProps, InputStyle } from './Input.interface'

const StyledInputLabelWrapper = styled.div`
  margin-right: ${({ theme }) => theme.spacing.base.lg};
`

const StyledLabel = styled(CopyText)<{ shrink: boolean }>`
  position: absolute;
  margin-top: ${({ theme }) => theme.spacing.base.xxs};
  transform-origin: top left;
  transition: color ${({ theme }) => theme.transition.medium} cubic-bezier(0, 0, 0.2, 1) 0ms,
    top ${({ theme }) => theme.transition.medium} cubic-bezier(0, 0, 0.2, 1) 0ms;

  ${({ shrink, theme }) =>
    shrink
      ? css`
          top: 0;
          transform-origin: top left;
        `
      : css`
          top: ${theme.font.lineHeight.sm};
          transform-origin: top left;
        `}
`

export interface InputLabelProps {
  children: ReactElement<InputProps | DropdownProps>
  color: ThemeColors
  htmlFor?: string
  inputStyle: InputStyle
  label: string
  shrink: boolean
}

export const InputLabel: FC<InputLabelProps> = props => {
  const { children, color, htmlFor, inputStyle, label, shrink } = props

  const fontSize = shrink ? 'xxs' : inputStyle === 'dense' ? 'xs' : 'sm'

  return (
    <StyledInputLabelWrapper>
      <StyledLabel
        tag="label"
        color={color}
        fontSize={fontSize}
        lineHeight="xs"
        shrink={shrink}
        htmlFor={htmlFor}>
        {label}
      </StyledLabel>
      {children}
    </StyledInputLabelWrapper>
  )
}
