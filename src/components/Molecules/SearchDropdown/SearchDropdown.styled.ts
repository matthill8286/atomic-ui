import { Typo } from '@/components/Atoms/Typography/Typo/Typo'
import { media, styled } from '@/styles'
import { SearchDropdownOptionProps, SearchListProps } from './SearchDropdown.interface'

export const StyledSearchList = styled.ol<SearchListProps>`
  ${({ active, isSearchable, theme }) => `
    max-width: 80%;
    max-height: 280px;
    overflow-y: scroll;
    position: absolute;
    top: ${isSearchable ? `96px` : `97px`};
    left: 0;
    right: 0;
    z-index: 3;
    list-style: none;
    padding: 0;
    margin: auto;
    box-shadow: ${theme.dimension.elevationLevel2};
    background-color: white;
    border-radius: ${theme.dimension.borderRadius2};
    transform: scaleY(0);
    transform: ${active && 'scaleY(1)'};
    transform-origin: 0 0;
    transition: transform ${theme.transition.short} ease;
  `}
`

export const StyledSearchDropdownOption = styled.li<SearchDropdownOptionProps>`
  ${({ theme }) => `
    display: block;
    max-width: 100%;
    margin: auto;
    background: ${theme.color.white};
    padding: ${theme.spacing.base.sm} ${theme.spacing.base.lg};
    border-bottom: 1px solid ${theme.color.grey2};
    hyphens: auto;
    text-align: left;

    &:hover {
      cursor: pointer;
      background: ${theme.color.grey3};

      > div:first-child {
          font-weight: bold;
          color: ${theme.color.grey6};
        }
      }
  `}
`
export const StyledBorderedTypo = styled(Typo)`
  border-right: 1px solid ${({ theme }) => theme.color.grey2};
`
export const StyledTypo = styled(Typo)`
  min-width: calc(100% - 16px);
`

export const StyledSearchDropdownWrapper = styled.div`
  position: relative;
  display: none;
  height: 48px;
  ${media.md} {
    display: flex;
  }
`
