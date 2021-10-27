import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableRow } from '@/components/Atoms/Table'
import { CopyText } from '@/components/Atoms/Typography'
import { cryptoCurrenciesMock } from '@/components/Atoms/Table/Table.mock'
import {
  StyledColoredData,
  StyledGhostRow,
  StyledGhostSprite,
} from '@/components/Atoms/Table/TableRow'
import { ThemeColors } from '@/types'
import { OrderBookEntries } from '@/components/Organisms/OrderBook/OrderBookEntries'
import { useWindowDimensions } from '@/components/Helper'
import { breakpoints } from '@/styles'

interface OrderBookTableProps {
  rows: any
  rowsKey: string
  maxPriceSize: number
  isReversed?: boolean
  headerTextColor?: ThemeColors
  textColor?: ThemeColors
  borderColor?: ThemeColors
  rowColor?: ThemeColors
  backgroundColor?: ThemeColors
  hideOnMobile?: boolean
  isOutlineRequired?: boolean
}

interface OrderBookHeaderProps {
  textColor?: ThemeColors
  cellText: string
}

const OrderBookHeadings = ['Price', 'Size', 'Total']

const OrderBookHeader: React.FC<OrderBookHeaderProps> = ({ textColor, cellText }) => {
  return (
    <TableCell cellType="th" collapsible={false}>
      <CopyText padding="0" margin="0" color={textColor || 'grey4'} toUpperCase>
        {cellText}
      </CopyText>
    </TableCell>
  )
}

export const OrderBookTable: React.FC<OrderBookTableProps> = ({
  isReversed,
  textColor,
  borderColor,
  backgroundColor,
  headerTextColor,
  rows,
  rowsKey,
  maxPriceSize,
  hideOnMobile,
  isOutlineRequired,
}) => {
  const { breakpoint: currentBreakpoint } = useWindowDimensions()
  const isMobile = currentBreakpoint < breakpoints.md

  const displayRows = Object.keys(rows)
    .map(key => rows[(key as unknown) as number])
    .filter(k => k)

  if (isMobile && rowsKey === 'asks') {
    displayRows.reverse()
  }

  return (
    <Table withBackground withBorderRadius={false}>
      <TableHead
        backgroundColor={backgroundColor || 'secondary'}
        borderColor={borderColor}
        isOutlineRequired={isOutlineRequired}>
        {!hideOnMobile && (
          <TableRow
            isReversed={isReversed || false}
            disableHover
            textColor={textColor}
            backgroundColor={backgroundColor || 'secondary'}>
            {OrderBookHeadings.map(entry => (
              <OrderBookHeader key={entry} cellText={entry} textColor={headerTextColor} />
            ))}
          </TableRow>
        )}
      </TableHead>
      <TableBody backgroundColor={backgroundColor} fullBorder={false}>
        <OrderBookEntries
          color={textColor || 'grey4'}
          isReversed={isReversed || false}
          rows={displayRows}
          maxPriceSize={maxPriceSize}
          rowsKey={rowsKey}
        />
      </TableBody>
    </Table>
  )
}
