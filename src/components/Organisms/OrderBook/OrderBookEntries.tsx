import React from 'react'
import { cryptoCurrenciesMock } from '@/components/Atoms/Table/Table.mock'
import {
  StyledColoredData,
  StyledGhostRow,
  StyledGhostSprite,
  TableRow,
} from '@/components/Atoms/Table/TableRow'
import { TableCell } from '@/components/Atoms/Table'
import { CopyText } from '@/components/Atoms/Typography'

export const OrderBookEntries = ({ order, type, color, isReversed }) => {
  if (!order) {
    return null
  }

  return (
    <>
      {order.map(crypto => {
        const values = cryptoCurrenciesMock[type][crypto]
        const colorSpriteWidth =
          (cryptoCurrenciesMock[type][crypto].total / cryptoCurrenciesMock.maxPriceSize) * 100
        return (
          <>
            <StyledGhostRow>
              <StyledGhostSprite isReversed={isReversed}>
                <StyledColoredData color={color} showPercentage={colorSpriteWidth} />
              </StyledGhostSprite>
            </StyledGhostRow>
            <TableRow
              key={values.price}
              isReversed={isReversed}
              disableHover
              backgroundColor="white">
              <TableCell mobileHeadline cellColor="white">
                <CopyText bold padding="0" margin="0" color={color}>
                  {values.price}
                </CopyText>
              </TableCell>
              <TableCell cellColor="white">
                <CopyText bold padding="0" margin="0" color="white">
                  {values.size}
                </CopyText>
              </TableCell>
              <TableCell cellColor="white">
                <CopyText bold padding="0" margin="0" color="white">
                  {values.total}
                </CopyText>
              </TableCell>
            </TableRow>
          </>
        )
      })}
    </>
  )
}
