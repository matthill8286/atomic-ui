import React, { ReactElement } from 'react'
import { Table, TableBody, TableCell, TableHead, TableRow } from '@/components/Atoms/Table'
import { CopyText } from '@/components/Atoms/Typography'
import { ThemeColors } from '@/types'
import { OrderBookEntries, OrderBookEntry } from '@/components/Organisms/OrderBook/OrderBookEntries'
import { useWindowDimensions } from '@/components/Helper'
import { breakpoints } from '@/styles'
import { OrderMeta, OrderRowHash, Type } from '@/components/Organisms/OrderBook/OrderBook.interface'

interface OrderBookTableProps {
  rows: OrderRowHash
  rowsKey: Type
  maxPriceSize: number
  isReversed?: boolean
  title?: string
  ticker?: string
  headerTextColor?: ThemeColors
  textColor?: ThemeColors
  borderColor?: ThemeColors
  rowColor?: ThemeColors
  backgroundColor?: ThemeColors
  hideOnMobile?: boolean
  isOutlineRequired?: boolean
}

export type Option = {
  key: string
  color: string
}

export type TypeOptions = {
  ask: Option
  bid: Option
}

const typeOptions: TypeOptions = {
  ask: { key: 'ask', color: '#f00' },
  bid: { key: 'bid', color: '#00d964' },
}

interface OrderBookHeaderProps {
  textColor?: ThemeColors
  cellText: string
}

const orderBookHeadings: string[] = ['Price', 'Size', 'Total']

const OrderBookHeader: React.FC<OrderBookHeaderProps> = ({ textColor, cellText }): ReactElement => {
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
}): ReactElement => {
  const { breakpoint: currentBreakpoint } = useWindowDimensions()
  const isMobile = currentBreakpoint < breakpoints.md

  const displayRows = Object.keys(rows)
    .map(key => rows[(key as unknown) as number])
    .filter(k => k)

  if (isMobile && rowsKey === typeOptions.ask.key) {
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
            {orderBookHeadings.map(entry => (
              <OrderBookHeader key={entry} cellText={entry} textColor={headerTextColor} />
            ))}
          </TableRow>
        )}
      </TableHead>
      <TableBody backgroundColor={backgroundColor} fullBorder={false}>
        {displayRows.map((row: OrderMeta) => {
          const { price, size, total } = row
          const colorSpriteWidth = (total / maxPriceSize) * 100

          return (
            <OrderBookEntry
              color="white"
              key={colorSpriteWidth}
              isReversed={isReversed}
              maxPriceSize={maxPriceSize}
              colorSpriteWidth={colorSpriteWidth}
              price={price}
              size={size}
              total={total}
            />
          )
        })}
      </TableBody>
    </Table>
  )
}
