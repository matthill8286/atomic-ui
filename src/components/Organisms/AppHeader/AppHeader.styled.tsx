import { Section } from '@/components/Atoms/Section'
import { FlexItem } from '@/components/Helper/FlexBox'
import { css, styled } from '@/styles'
import { BoxDimensions } from '@/types'
import { padding } from '@/styles/sc-shared-functions'

export const StyledSection = styled(Section)`
  background: ${({ theme }) => theme.color[theme.header.topBar]};
  height: ${({ theme }) => theme.header.height + 20};
  z-index: 10;
  top: 0;
  left: auto;
  right: 0;
  position: fixed;
`

export const StyledHeaderWrapper = styled.div<{ paddingString?: BoxDimensions }>(
  ({ theme, color, paddingString }) => css`
    ${paddingString ? `${padding({ theme, padding: paddingString })};` : ''}
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
  flex-direction: column;
  margin-left: ${({ theme }) => theme.spacing.gap.narrow};
  margin-right: ${({ theme }) => theme.spacing.gap.narrow};
`
