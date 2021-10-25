import React from 'react'
import { Typo } from '@/components/Atoms/Typography'
import { media } from '@/styles'
import { css, styled } from '@/styles/styled'
import { Theme, ThemeColors } from '@/types'
import { isSaiyanTheme } from '@/utils/helper'

export interface TableCellProps {
  children?: React.ReactNode
  cellType?: 'td' | 'th'
  borderDirection?: 'bottom' | 'right'
  noBorder?: boolean
  cellWidth?: number
  mobileHeadline?: boolean
  noPadding?: boolean
  collapsible?: boolean
  textAlign?: 'left' | 'right' | 'center'
  fullBorder?: boolean
  colSpan?: number
  className?: string
  cellColor?: ThemeColors
}

const StyledCollapsible = css<TableCellProps>`
  ${media.maxSm} {
    ${({ mobileHeadline, theme, noPadding }) => `
      display: block;
      padding-bottom: ${mobileHeadline || noPadding ? 0 : theme.spacing.base.sm};
      width: 100%;
      color: ${mobileHeadline ? theme.color.grey4 : undefined};
      border: none;
    `}
  }
`

const borderProperty = (theme: Theme) =>
  isSaiyanTheme() ? `1px solid ${theme.color.grey2}` : `1px solid ${theme.color.grey3}`

const StyledCellBorder = css<TableCellProps>`
  ${({ theme, noBorder, borderDirection }) => `
    border-radius: ${theme.dimension.borderRadius0};
    border-right: 
      ${noBorder || borderDirection === 'bottom' ? 'none' : borderProperty(theme)};
    border-bottom: 
      ${noBorder || borderDirection === 'right' ? 'none' : borderProperty(theme)};
  `}
`

const StyledDataCell = styled.td<TableCellProps>`
  ${({ collapsible }) => collapsible && StyledCollapsible}
  ${StyledCellBorder}
  ${({ cellWidth, textAlign, theme, noPadding, cellColor }) => `
    position: relative;
    display: flex;
    flex: 1;
    color: ${cellColor ? theme.color[cellColor] : ''};
    text-align: ${textAlign};
    width: ${cellWidth ? `${cellWidth}%` : ''};
    padding: ${noPadding ? 0 : theme.spacing.base.sm};
  `}
`

export const TableCell: React.FC<TableCellProps> = ({
  children,
  cellWidth,
  cellType = 'td',
  borderDirection = 'bottom',
  noBorder = true,
  mobileHeadline,
  noPadding,
  collapsible = true,
  textAlign = 'left',
  fullBorder = false,
  colSpan,
  className,
  cellColor,
}) => {
  return (
    <StyledDataCell
      as={cellType}
      noBorder={noBorder}
      borderDirection={borderDirection}
      cellWidth={cellWidth}
      mobileHeadline={mobileHeadline}
      noPadding={noPadding}
      collapsible={collapsible}
      textAlign={textAlign}
      cellColor={cellColor}
      fullBorder={fullBorder}
      colSpan={colSpan}
      className={className}>
      {typeof children === 'string' ? (
        <Typo weight={cellType === 'th' ? 'semibold' : 'regular'} fontSize={'sm'}>
          {children}
        </Typo>
      ) : (
        children
      )}
    </StyledDataCell>
  )
}
