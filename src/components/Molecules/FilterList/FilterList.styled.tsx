import { media } from '@/styles/media'
import { styled } from '@/styles/styled'
import { StyledEntryProps } from './FilterList.interface'

export const StyledSkeleton = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  height: ${({ theme }) => theme.spacing.base.md};
`

export const StyledEntry = styled.div<StyledEntryProps>`
  cursor: ${({ isDisabled }) => isDisabled && 'not-allowed'};
  opacity: ${({ isDisabled }) => isDisabled && 0.2};
  color: ${({ theme }) => theme.color.black};
  font-size: ${({ theme }) => theme.font.size.sm};
  display: block;
  position: relative;
  margin-bottom: ${({ theme }) => theme.spacing.base.sm};
`

export const StyledEntryText = styled.span`
  color: ${({ theme }) => theme.color.black};
  display: inherit;
  font-family: ${({ theme }) => theme.font.family.default};
  font-size: ${({ theme }) => theme.font.size.xs};
  width: 75%;
  will-change: font-size, line-height, padding-left;
  float: left;
  ${media.md} {
    font-size: ${({ theme }) => theme.font.size.sm};
    line-height: ${({ theme }) => theme.font.lineHeight.sm};
  }
`

export const StyledEntryInfo = styled.span`
  display: inline-flex;
  position: relative;
  top: 3px;
  padding-left: ${({ theme }) => theme.spacing.base.xs};
  cursor: pointer;
`
