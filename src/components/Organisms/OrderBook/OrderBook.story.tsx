import { storiesOf } from '@storybook/react'
import React from 'react'
import { OrderBookTable } from './index'
import { cryptoCurrenciesMock } from '@/components/Atoms/Table/Table.mock'
import { FlexBox, FlexItem, useWindowDimensions } from '@/components/Helper'
import { breakpoints, media, styled } from '@/styles'

const StyledTableWrapper = styled(FlexBox)`
  ${media.md} {
    flex-direction: row;
  }
`

storiesOf('Design System/Organisms/OrderBookTable', module).add(
  'default',
  () => {
    const { breakpoint: currentBreakpoint } = useWindowDimensions()
    const isMobile = currentBreakpoint < breakpoints.md

    return (
      <StyledTableWrapper flexDirection="column">
        <FlexItem flex="1">
          <OrderBookTable
            rows={cryptoCurrenciesMock.asks}
            rowsKey="asks"
            maxPriceSize={cryptoCurrenciesMock.maxPriceSize}
            textColor="error"
            headerTextColor="white"
            isReversed
            backgroundColor="secondary"
            isOutlineRequired={false}
          />
        </FlexItem>
        <FlexItem flex="1">
          <OrderBookTable
            rows={cryptoCurrenciesMock.bids}
            rowsKey="bids"
            backgroundColor="secondary"
            headerTextColor="white"
            textColor="info"
            hideOnMobile={isMobile}
            maxPriceSize={cryptoCurrenciesMock.maxPriceSize}
            isOutlineRequired={false}
          />
        </FlexItem>
      </StyledTableWrapper>
    )
  },
  {
    info: null,
  }
)
