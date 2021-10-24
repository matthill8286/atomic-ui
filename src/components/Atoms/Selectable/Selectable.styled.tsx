import { lighten } from 'polished'
import { Card } from '@/components/Atoms/Card'
import { Icon } from '@/components/Atoms/Icon'
import { CopyText } from '@/components/Atoms/Typography/CopyText'
import { styled } from '@/styles/styled'
import {
  SelectableState,
  StyledLabelProps,
  StyledNativeSelectableProps,
  StyledSelectedCheckMarkProps,
} from './Selectable.interface'

const getSelectableSize = (selectableSize: string) => (selectableSize === 'large' ? '24px' : '20px')

const getSelectableFillingColor = (state: SelectableState, theme) =>
  state === 'disabled' ? theme.color.grey4 : theme.color.primary

export const StyledIcon = styled(Icon)<StyledSelectedCheckMarkProps>`
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  width: ${({ selectableSize }) => getSelectableSize(selectableSize)};
  height: ${({ selectableSize }) => getSelectableSize(selectableSize)};
  svg {
    fill: ${({ theme, state }) => getSelectableFillingColor(state, theme)};
    height: 100%;
  }
`
export const StyledRadioMark = styled.span<StyledSelectedCheckMarkProps>`
  width: ${({ selectableSize }) => getSelectableSize(selectableSize)};
  height: ${({ selectableSize }) => getSelectableSize(selectableSize)};
  position: absolute;
  display: none;
  &:before {
    content: '';
    background: ${({ state, theme }) => getSelectableFillingColor(state, theme)};
    width: ${({ selectableSize }) => (selectableSize === 'large' ? '12px' : '10px')};
    height: ${({ selectableSize }) => (selectableSize === 'large' ? '12px' : '10px')};
    border-radius: 50%;
  }
`

export const StyledLabel = styled.label<StyledLabelProps>`
  cursor: pointer;
  position: relative;
  top: 0;
  ${({
    state,
    theme: {
      polished: { inactive },
    },
  }) =>
    state === 'disabled' &&
    `
    pointer-events: none;
    opacity: ${inactive};
  `}
  display: flex;
  height: 100%;
  align-items: center;
  &:before {
    content: '';
    top: 0;
    position: absolute;
    width: ${({ selectableSize }) => getSelectableSize(selectableSize)};
    height: ${({ selectableSize }) => getSelectableSize(selectableSize)};
    border-radius: ${({ theme, type }) =>
      type === 'radio' ? '50%' : theme.dimension.borderRadius1};
    border: solid 1px
      ${({ theme, state }) => (state === 'error' ? theme.color.error : theme.color.grey4)};
    background-color: ${({ theme, state }) =>
      state === 'disabled'
        ? lighten(theme.polished.inactive, theme.color.grey3)
        : theme.color.white};
    box-sizing: border-box;
  }
`
export const StyledFocusedIndicator = styled.span`
  display: inline-block;
`

export const StyledNativeSelectable = styled.input<StyledNativeSelectableProps>`
  width: ${({ selectableSize }) => getSelectableSize(selectableSize)};
  height: ${({ selectableSize }) => getSelectableSize(selectableSize)};
  position: relative;
  z-index: -1;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  flex-shrink: 0;
  ${({ type }) =>
    type === 'checkbox' &&
    `&:checked + ${StyledIcon} {
      display: inline-block;
      text-align: center;
  }`};

  ${({ type }) =>
    type === 'radio' &&
    `&:checked + ${StyledRadioMark} {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      left: 0;
      top: 0;
  }`};

  &:focus ~ ${StyledFocusedIndicator} {
    width: ${({ selectableSize }) => getSelectableSize(selectableSize)};
    height: ${({ selectableSize }) => getSelectableSize(selectableSize)};
    box-shadow: ${({ theme }) => theme.dimension.elevationLevel1};
    position: absolute;
    top: 0;
    z-index: -1;
    border-radius: ${({ type }) => (type === 'checkbox' ? '4px' : '50%')};
    left: 0;
  }
`

export const StyledCopyText = styled(CopyText).attrs(() => ({ tag: 'div' }))`
  width: 100%;
`

export const StyledSelectableContentWrapper = styled.div`
  width: 100%;
`

export const StyledSelectableButton = styled.input`
  display: none;
`

export const StyledSelectableContent = styled.div`
  display: flex;
  align-items: center;
`

export const StyledSelectableButtonContentWrapper = styled(Card)`
  & > div {
    display: flex;
    justify-content: center;
    height: 40px;
  }
`

export const StyledButtonLabel = styled.label`
  cursor: pointer;
`

export const StyledButtonText = styled(CopyText).attrs(() => ({ tag: 'div' }))`
  line-height: ${({ theme }) => theme.font.lineHeight.sm};
  margin-left: ${({ theme }) => theme.spacing.base.xxs};
  width: 100%;
`
