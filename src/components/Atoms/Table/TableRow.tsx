import React from 'react'
import { media } from '@/styles'
import { css, styled } from '@/styles/styled'
import { ThemeColors } from '@/types'

export interface TableRowProps {
  children?: React.ReactNode
  collapsible?: boolean
  isReversed?: boolean
  verticalAlign?: 'top' | 'middle' | 'bottom'
  disableHover?: boolean
  className?: string
  hoverColor?: ThemeColors
  backgroundColor?: ThemeColors
}

const StyledCollapsible = css`
  ${media.maxSm} {
    border-bottom: ${({ theme }) => `1px solid ${theme.color.grey2}`};
    border-radius: ${({ theme }) => theme.dimension.borderRadius0};
    border-right: 0;
  }
`

const StyledTableRow = styled.tr<TableRowProps>`
  ${({ collapsible }) => collapsible && StyledCollapsible}
  ${({ disableHover, verticalAlign, theme, isReversed, hoverColor = 'grey1' }) => `
    display: flex;
    position: relative;
    flex-direction: row;
    flex: 1;
    vertical-align: ${verticalAlign};
    text-align: center;
      ${({ backgroundColor }) => backgroundColor && `color: ${theme.color[backgroundColor]};`};
      
    ${media.md} {
      border: none;
      
      ${
        isReversed
          ? `
            flex-direction: row-reverse;
      `
          : ``
      };
      
      ${
        !disableHover
          ? `&:hover {
          cursor: pointer;
          background: ${theme.color[hoverColor]};
        }`
          : ''
      };
    }
  `}
`

export const StyledGhostRow = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
`

export const StyledGhostSprite = styled.div<{ isReversed?: boolean }>`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  flex: 1;
  flex-direction: row;
  min-height: 52px;
  padding: 2px 0;

  ${media.md} {
    ${({ isReversed }) =>
      isReversed
        ? `
            flex-direction: row-reverse;
      `
        : ``};
  }
`

export const StyledColoredData = styled.div<{ showPercentage?: number; color?: ThemeColors }>`
  width: ${({ showPercentage }) => (showPercentage ? `${showPercentage}%` : ``)};
  background-color: ${({ theme, color }) => (color ? theme.color[color] : 'rgba(206,11,50, 0.3)')};
  opacity: 0.3;
`

export const StyledSvgMarker = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column-reverse;
`

export const TableRow: React.FC<TableRowProps> = ({
  children,
  collapsible = true,
  verticalAlign = 'middle',
  disableHover = false,
  className,
  hoverColor,
  backgroundColor,
  isReversed,
}) => {
  return (
    <StyledTableRow
      collapsible={collapsible}
      verticalAlign={verticalAlign}
      disableHover={disableHover}
      isReversed={isReversed}
      className={className}
      backgroundColor={backgroundColor}
      hoverColor={hoverColor}>
      {children}
    </StyledTableRow>
  )
}
