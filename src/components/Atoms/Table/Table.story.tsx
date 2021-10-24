import { boolean, select } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableRow } from './index'
import { cryptoCurrenciesMock, customTableElements } from './Table.mock'
import Readme from './Table.readme.md'
import { useWindowDimensions } from '@/components/Helper'
import {
  StyledColoredData,
  StyledGhostRow,
  StyledGhostSprite,
} from '@/components/Atoms/Table/TableRow'

interface TableRowType {
  type: string
  value: string
}

interface RichTextRow {
  asset: string | React.ReactNode
  assetNumber?: string
  noBorder: boolean
}

storiesOf('Design System/Atoms/Table', module)
  .add(
    'default',
    () => {
      const tableKnobs = {
        layout: select('table-layout', ['auto', 'fixed', 'initial'], 'auto', 'Table'),
        withBorderRadius: boolean('withBorderRadius', true, 'Table'),
        ariaLabel: 'this is a table',
      }

      const tableCellKnobs = {
        borderDirection: select('border-direction', ['right', 'bottom'], 'bottom', 'Cell'),
        noBorder: boolean('noBorder', false, 'Cell'),
      }

      return (
        <Table {...tableKnobs}>
          <TableHead>
            <TableRow isReversed disableHover>
              <TableCell cellType="th" {...tableCellKnobs}>
                <div>Price</div>
              </TableCell>
              <TableCell cellType="th" {...tableCellKnobs}>
                <div>Size</div>
              </TableCell>
              <TableCell cellType="th" {...tableCellKnobs}>
                <div>Total</div>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.keys(cryptoCurrenciesMock.asks).map(crypto => {
              const values = cryptoCurrenciesMock.asks[crypto]
              const colorSpriteWidth =
                (cryptoCurrenciesMock.asks[crypto].total / cryptoCurrenciesMock.maxPriceSize) * 100
              return (
                <>
                  <StyledGhostRow>
                    <StyledGhostSprite isReversed>
                      {cryptoCurrenciesMock.ticker === 'PI_XBTUSD' ? (
                        <StyledColoredData showPercentage={colorSpriteWidth} />
                      ) : null}
                    </StyledGhostSprite>
                  </StyledGhostRow>
                  <TableRow key={values.price} isReversed disableHover>
                    <TableCell {...tableCellKnobs} mobileHeadline>
                      {values.price}
                    </TableCell>
                    <TableCell {...tableCellKnobs}>{values.size}</TableCell>
                    <TableCell {...tableCellKnobs}>{values.total}</TableCell>
                  </TableRow>
                </>
              )
            })}
          </TableBody>
        </Table>
      )
    },
    {
      info: Readme,
    }
  )
  .add(
    'customTableElements | desktop',
    () => {
      const tableKnobs = {
        layout: select('table-layout', ['auto', 'fixed', 'initial'], 'auto', 'Table'),
        withBorderRadius: boolean('withBorderRadius', true, 'Table'),
        ariaLabel: 'this is a table',
      }

      const tableCellKnobs = {
        borderDirection: select('border-direction', ['right', 'bottom'], 'bottom', 'Cell'),
        noBorder: boolean('noBorder', false, 'Cell'),
      }
      return (
        <Table {...tableKnobs}>
          <TableHead>
            <TableRow>
              <TableCell cellType="th" collapsible {...tableCellKnobs}>
                <div>Allow</div>
              </TableCell>
              <TableCell cellType="th" collapsible={false} {...tableCellKnobs}>
                <div>Category</div>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customTableElements.map((row: RichTextRow, index) => (
              <TableRow key={index}>
                <TableCell
                  {...tableCellKnobs}
                  cellWidth={10}
                  collapsible={false}
                  noBorder={row.noBorder}>
                  {row.asset}
                </TableCell>
                <TableCell
                  {...tableCellKnobs}
                  cellWidth={10}
                  collapsible={false}
                  noBorder={row.noBorder}>
                  {row.assetNumber}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )
    },
    {
      info: Readme,
    }
  )
