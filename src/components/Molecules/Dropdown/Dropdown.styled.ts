import { Icon } from '@/components/Atoms/Icon'
import { Typo } from '@/components/Atoms/Typography/Typo/Typo'
import { css, styled } from '@/styles/styled'
import {
  IconPropsEnhanced,
  ListProps,
  StyledDropdownOptionProps,
  StyledDropdownProps,
} from './Dropdown.interface'

export const StyledContainer = styled.div`
  position: relative;
  cursor: pointer;

  ${({ theme }) =>
    css`
      & label {
        margin-top: ${({ theme }) => theme.spacing.base.xs};
        margin-left: ${({ theme }) => theme.spacing.base.xs};
        line-height: ${({ theme }) => theme.font.lineHeight.md};
        font-size: ${({ theme }) => theme.font.size.md};
        color: ${({ theme }) => theme.color.black};
        position: relative;
      }
    `};
`

export const StyledDropdown = styled.div<StyledDropdownProps>`
  ${({ theme, hasLabel, withBackground }) => css`
    width: 100%;
    position: relative;
    display: inline-block;
    margin-top: ${hasLabel ? theme.font.lineHeight.xxxs : 0};
    line-height: ${theme.font.lineHeight.xxxl};
    box-shadow: ${theme.dimension.elevationLevel1};
    border-radius: ${theme.dimension.borderRadius2};
    ${withBackground && `background-color: ${theme.color.white}`};

    & span {
      margin-left: 20px;
    }

    & + hr {
      height: 2px;
      width: 100%;
      margin-top: 2px;
    }
  `}
`

export const StyledTypo = styled(Typo)`
  max-width: calc(100% - 16px);
`

export const StyledIcon = styled(Icon)<IconPropsEnhanced>`
  ${({ iconLeft }) => css`
    pointer-events: none;
    position: absolute;
    top: 50%;
    right: ${iconLeft ? `40px` : `20px`};
    transform: translateY(-50%);
  `}
`

export const StyledDone = styled(Icon)<IconPropsEnhanced>`
  pointer-events: none;
  position: absolute;
  left: 20px;
`

export const StyledList = styled.ol<ListProps>`
  ${({ active, isSearchable, theme, iconLeft }) => `
    min-width: 100%;
    ${iconLeft ? `` : `max-width: 100%;`}
    max-height: 320px;
    overflow-y: ${iconLeft ? `hidden` : `scroll`};
    position: absolute;
    top: ${isSearchable ? `66px` : `50px`};
    z-index: 3;
    list-style: none;
    padding: ${iconLeft ? 0 : theme.spacing.base.xs} 0;
    margin: ${theme.spacing.base.sm} 0;
    box-shadow: ${theme.dimension.elevationLevel2};
    background-color: white;
    border-radius: ${iconLeft ? '0 0 8px 8px' : theme.dimension.borderRadius2};
    transform: scaleY(0);
    transform: ${active && 'scaleY(1)'};
    transform-origin: 0 0;
    transition: transform ${theme.transition.short} ease;
    ${iconLeft ? `right: 0;` : ``}
    overflow-x: hidden;
  `}
`

export const StyledDropdownOption = styled.li<StyledDropdownOptionProps>`
  ${({ theme, checkmark }) => `
    display: ${checkmark ? `inline-flex` : `block`};
    align-items: center;
    max-width: 100%;
    min-width: 100%;
    padding: ${theme.spacing.base.xs} ${theme.spacing.base.sm};
    background: ${theme.color.white};
    hyphens: auto;
    text-align: left;
    ${checkmark ? `padding-left: 45px;` : ``}

    &:hover {
      cursor: pointer;
      background: ${theme.color.grey1};
    }
  `}
`

export const StyledSearchableDropdownWrapper = styled.div`
  position: relative;
`

export const StyledFieldWrapper = styled.div<StyledDropdownProps>`
  display: inline-block;
  ${({ theme, noBorder }) => !noBorder && `border: 1px solid ${theme.color.grey5};`}
  padding: 0 12px;
  margin-top: ${({ hasLabel, theme }) => (hasLabel ? theme.spacing.base.sm : 0)};
  ${({ theme, noBorder }) => !noBorder && `border: 1px solid ${theme.color.grey5};`}
  border-radius: ${({ theme }) => theme.dimension.borderRadius3};
  box-shadow: ${({ theme }) => theme.dimension.elevationLevel1};
  position: relative;
  width: 100%;
`

export const StyledDropdownSelect = styled.select<{ listType?: string }>`
  appearance: none;
  background-color: transparent;
  border: none;
  box-shadow: none;
  cursor: pointer;
  display: block;
  font-size: ${({ theme }) => theme.font.size.sm};
  font-family: ${({ theme }) => theme.font.family.default};
  ${({ theme }) =>
    css`
      padding: calc(${theme.spacing.base.xxs} * 3) 0;
    `};
  outline: none;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
  z-index: 2;
`
