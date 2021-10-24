import { boolean, select } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableRow } from './index'
import { cryptoCurrenciesMock, customTableElements } from './Table.mock'
import Readme from './Table.readme.md'
import {
  StyledColoredData,
  StyledGhostRow,
  StyledGhostSprite,
} from '@/components/Atoms/Table/TableRow'
import { CopyText } from '@/components/Atoms/Typography'
import { styled } from '@/styles'

interface TableRowType {
  type: string
  value: string
}

interface RichTextRow {
  asset: string | React.ReactNode
  assetNumber?: string
  noBorder: boolean
}

const StyledTableWrapper = styled.div`
  max-width: 600px;
`

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
        <StyledTableWrapper>
          <Table {...tableKnobs} withBackground>
            <TableHead backgroundColor="secondary" borderColor="grey2" isOutlineRequired>
              <TableRow isReversed disableHover backgroundColor="secondary">
                <TableCell cellType="th" {...tableCellKnobs}>
                  <CopyText padding="0" margin="0" color="grey4" toUpperCase>
                    Price
                  </CopyText>
                </TableCell>
                <TableCell cellType="th" {...tableCellKnobs}>
                  <CopyText padding="0" margin="0" color="grey4" toUpperCase>
                    Size
                  </CopyText>
                </TableCell>
                <TableCell cellType="th" {...tableCellKnobs}>
                  <CopyText padding="0" margin="0" color="grey4" toUpperCase>
                    Total
                  </CopyText>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody backgroundColor="secondary">
              {Object.keys(cryptoCurrenciesMock.asks).map(crypto => {
                const values = cryptoCurrenciesMock.asks[crypto]
                const colorSpriteWidth =
                  (cryptoCurrenciesMock.asks[crypto].total / cryptoCurrenciesMock.maxPriceSize) *
                  100
                return (
                  <>
                    <StyledGhostRow>
                      <StyledGhostSprite isReversed>
                        {cryptoCurrenciesMock.ticker === 'PI_XBTUSD' ? (
                          <StyledColoredData color="error" showPercentage={colorSpriteWidth} />
                        ) : null}
                      </StyledGhostSprite>
                    </StyledGhostRow>
                    <TableRow key={values.price} isReversed disableHover backgroundColor="white">
                      <TableCell {...tableCellKnobs} mobileHeadline cellColor="white">
                        <CopyText bold padding="0" margin="0" color="error">
                          {values.price}
                        </CopyText>
                      </TableCell>
                      <TableCell cellColor="white" {...tableCellKnobs}>
                        <CopyText bold padding="0" margin="0" color="white">
                          {values.size}
                        </CopyText>
                      </TableCell>
                      <TableCell cellColor="white" {...tableCellKnobs}>
                        <CopyText bold padding="0" margin="0" color="white">
                          {values.total}
                        </CopyText>
                      </TableCell>
                    </TableRow>
                  </>
                )
              })}
            </TableBody>
          </Table>
        </StyledTableWrapper>
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
