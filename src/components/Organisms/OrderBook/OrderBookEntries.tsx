import React, { memo, ReactElement } from 'react'
import {
  StyledColoredData,
  StyledGhostRow,
  StyledGhostSprite,
  TableRow,
} from '@/components/Atoms/Table/TableRow'
import { TableCell } from '@/components/Atoms/Table'
import { CopyText } from '@/components/Atoms/Typography'
import { ThemeColors } from '@/types'
import { OrderMeta } from '@/components/Organisms/OrderBook/OrderBook.interface'

interface OrderBookEntriesProps {
  rows: any
  rowsKey: string
  color: ThemeColors
  textColor: ThemeColors
  isReversed: boolean
  maxPriceSize: number
}

interface OrderBookEntryProps extends OrderMeta {
  color: ThemeColors
  textColor?: ThemeColors
  isReversed?: boolean
  maxPriceSize: number
  colorSpriteWidth: number
}

export const OrderBookEntry: React.NamedExoticComponent<OrderBookEntryProps> = memo(
  ({ price, size, total, colorSpriteWidth, color, isReversed, textColor }): ReactElement => {
    return (
      <>
        <StyledGhostRow>
          <StyledGhostSprite isReversed={isReversed}>
            <StyledColoredData color={textColor} showPercentage={colorSpriteWidth} />
          </StyledGhostSprite>
        </StyledGhostRow>
        <TableRow key={price} isReversed={isReversed} disableHover backgroundColor="white">
          <TableCell mobileHeadline cellColor="white">
            <CopyText bold padding="0" margin="0" color={color}>
              {price}
            </CopyText>
          </TableCell>
          <TableCell cellColor="white">
            <CopyText bold padding="0" margin="0" color="white">
              {size}
            </CopyText>
          </TableCell>
          <TableCell cellColor="white">
            <CopyText bold padding="0" margin="0" color="white">
              {total}
            </CopyText>
          </TableCell>
        </TableRow>
      </>
    )
  }
)

export const OrderBookEntries: React.NamedExoticComponent<OrderBookEntriesProps> = memo(
  ({ rows, rowsKey, color, isReversed, maxPriceSize, textColor }): ReactElement | null => {
    if (!rows) {
      return null
    }

    return (
      <>
        {rows.map((row: OrderMeta) => {
          const { price, size, total } = row

          const colorSpriteWidth = (total / maxPriceSize) * 100

          return (
            <>
              <StyledGhostRow>
                <StyledGhostSprite isReversed={isReversed}>
                  <StyledColoredData color={textColor} showPercentage={colorSpriteWidth} />
                </StyledGhostSprite>
              </StyledGhostRow>
              <TableRow key={price} isReversed={isReversed} disableHover backgroundColor="white">
                <TableCell mobileHeadline cellColor="white">
                  <CopyText bold padding="0" margin="0" color={color}>
                    {price}
                  </CopyText>
                </TableCell>
                <TableCell cellColor="white">
                  <CopyText bold padding="0" margin="0" color="white">
                    {size}
                  </CopyText>
                </TableCell>
                <TableCell cellColor="white">
                  <CopyText bold padding="0" margin="0" color="white">
                    {total}
                  </CopyText>
                </TableCell>
              </TableRow>
            </>
          )
        })}
      </>
    )
  }
)
