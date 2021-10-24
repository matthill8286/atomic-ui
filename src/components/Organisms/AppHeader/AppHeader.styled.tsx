import { Section } from '@/components/Atoms/Section'
import { FlexItem } from '@/components/Helper/FlexBox'
import { css, styled } from '@/styles'
import { BoxDimensions } from '@/types'
import { getBoxDimension } from '@/styles/sc-shared-functions'

export const StyledSection = styled(Section)`
  background: ${({ theme }) => theme.header.topBar};
  height: ${({ theme }) => theme.header.height};
  z-index: 10;
  top: 0;
  left: auto;
  right: 0;
  position: fixed;
`

export const StyledHeaderWrapper = styled.div<{ padding?: BoxDimensions }>(
  ({ theme, color, padding }) => css`
    ${padding ? `padding: ${getBoxDimension(theme, padding) || 0};` : ''}
    box-shadow: ${({ theme }) => theme.dimension.elevationLevel1};
    display: flex;
    flex-direction: row;
    z-index: 15;
  `
)

export const StyledLogo = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-start;
`

export const StyledActionItems = styled.div`
  display: flex;
  flex-grow: 2;
  justify-content: flex-end;
`

export const StyledItemWrapper = styled(FlexItem)`
  align-self: center;
  margin-left: ${({ theme }) => theme.spacing.gap.narrow};
  margin-right: ${({ theme }) => theme.spacing.gap.narrow};
`
