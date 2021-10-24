import { Icon } from '@/components/Atoms/Icon'
import { getBoxDimension } from '@/styles/sc-shared-functions'
import { styled } from '@/styles/styled'
import { BoxDimensions } from '@/types'

export const StyledInputSearchWrapper = styled.div<{
  margin: BoxDimensions
  padding: BoxDimensions
}>`
  display: inline-flex;
  flex-direction: column;
  position: relative;
  vertical-align: top;
  width: 100%;
  max-width: 300px;
  border-radius: ${({ theme }) => theme.dimension.borderRadius8};
  border: 1px solid ${({ theme }) => theme.color.grey2}; 

    ${({ margin, theme }) => margin && `margin: ${getBoxDimension(theme, margin)};`}
    ${({ padding, theme }) => padding && `padding: ${getBoxDimension(theme, padding)};`} ${Icon} {
    position: absolute;
    right: 0;
    top: 0;

    outline: none;

    &:focus {
      svg {
        fill: ${({ theme }) => theme.color.grey2};
      }
    }
  }
`

export const StyledInputSearch = styled.input`
  border: 0;
  box-sizing: border-box;
  display: block;
  font-size: ${({ theme }) => theme.font.size.sm};
  font-family: ${({ theme }) => theme.font.family.default};
  padding-left: ${({ theme }) => theme.spacing.base.sm};
  padding-right: ${({ theme }) => theme.spacing.base.lg};
  margin: 0;
  min-width: 0;
  width: 100%;
  height: ${({ theme }) => theme.spacing.base.xxl};
  line-height: ${({ theme }) => theme.font.lineHeight.md};
  outline: none;
  position: relative;
  background: transparent;
  -webkit-tap-highlight-color: transparent;

  ::placeholder {
    color: ${({ theme }) => theme.color.grey5};
  }
`
