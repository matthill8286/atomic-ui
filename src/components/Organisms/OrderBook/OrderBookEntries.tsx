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

interface OrderBookEntriesProps {
  rows: any
  rowsKey: string
  color: ThemeColors
  isReversed: boolean
  maxPriceSize: number
}

export const OrderBookEntries: React.NamedExoticComponent<OrderBookEntriesProps> = memo(
  ({ rows, rowsKey, color, isReversed, maxPriceSize }): ReactElement | null => {
    if (!rows) {
      return null
    }

    return (
      <>
        {rows.map(row => {
          const { price, size, total } = row

          const colorSpriteWidth = (total / maxPriceSize) * 100

          return (
            <>
              <StyledGhostRow>
                <StyledGhostSprite isReversed={isReversed}>
                  <StyledColoredData color={color} showPercentage={colorSpriteWidth} />
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
