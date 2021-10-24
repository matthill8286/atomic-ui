import { Cell } from '@/components/Helper/Grid/Cell'
import { FlexBox } from '@/components/Helper/FlexBox'
import { media } from '@/styles/media'
import { css, styled } from '@/styles/styled'
import { getBoxDimension } from '@/styles/sc-shared-functions'
import { BoxDimensions } from '@/types'

export const StyledPicture = styled(Cell)`
  ${media.xs} {
    width: 100%;
  }

  ${media.lg} {
    justify-self: flex-start;
    width: 100%;
  }
`

export const StyledCopyText = styled(Cell)`
  ${media.xs} {
    justify-self: flex-start;
    padding-left: ${({ theme }) => theme.spacing.base.sm};
  }

  ${media.lg} {
    justify-self: center;
  }

  ${media.xl} {
    justify-self: flex-end;
  }
`

export const StyledGroupedActionLinksWrapper = styled(Cell)`
  ${media.xs} {
    justify-self: flex-start;
  }

  ${media.lg} {
    justify-self: center;
  }
`

export const StyledFooterWrapper = styled.div<{ padding?: BoxDimensions }>(
  ({ theme, color, padding }) => css`
    ${padding ? `padding: ${getBoxDimension(theme, padding) || 0};` : ''}
  `
)

export const StyledGroupedActionLinks = styled(FlexBox)`
  ${media.xs} {
    justify-content: flex-start;
    flex-direction: column;
  }

  ${media.lg} {
    flex-direction: row;
    justify-content: space-between;
  }
`
