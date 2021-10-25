import { boolean, select } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import React from 'react'
import { OrderBook } from './index'
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
          <OrderBook
            order={
              !isMobile
                ? Object.keys(cryptoCurrenciesMock.asks)
                : Object.keys(cryptoCurrenciesMock.asks).reverse()
            }
            type="asks"
            textColor="error"
            headerTextColor="white"
            isReversed
            backgroundColor="secondary"
            isOutlineRequired={false}
          />
        </FlexItem>
        <FlexItem flex="1">
          <OrderBook
            order={Object.keys(cryptoCurrenciesMock.bids)}
            type="bids"
            backgroundColor="secondary"
            headerTextColor="white"
            textColor="info"
            hideOnMobile={isMobile}
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
