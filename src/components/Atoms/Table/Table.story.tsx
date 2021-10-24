import { boolean, select } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableRow } from './'
import { customTableElements, customTableElementsMobileData, tableData } from './Table.mock'
import Readme from './Table.readme.md'

interface TableRow {
  type: string
  value: string
}

interface RichTextRow {
  asset: string | React.ReactNode
  assetNumber?: string
  noBorder: boolean
}

interface RichTextPriceRow {
  textLabel: string | React.ReactNode
  text: string | React.ReactNode
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
            <TableRow>
              <TableCell cellType="th" {...tableCellKnobs}>
                <div>Type</div>
              </TableCell>
              <TableCell cellType="th" {...tableCellKnobs} noPadding />
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((row: TableRow) => (
              <TableRow key={row.type}>
                <TableCell {...tableCellKnobs} cellWidth={30} mobileHeadline>
                  {row.type}
                </TableCell>
                <TableCell {...tableCellKnobs} cellWidth={50}>
                  {row.value}
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
  .add(
    'customTableElements | mobile',
    () => {
      const tableKnobs = {
        layout: select('table-laylout', ['auto', 'fixed', 'initial'], 'auto', 'Table'),
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
              <TableCell cellType="th" collapsible={false} {...tableCellKnobs}>
                <div>Asset</div>
              </TableCell>
              <TableCell cellType="th" collapsible={false} textAlign={'right'} {...tableCellKnobs}>
                <div>Asset ID</div>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customTableElementsMobileData.map((row: RichTextRow, index) => (
              <TableRow key={index} verticalAlign={'top'} collapsible={false}>
                <TableCell
                  {...tableCellKnobs}
                  cellWidth={30}
                  collapsible={false}
                  noBorder={row.noBorder}>
                  {row.asset}
                </TableCell>
                <TableCell
                  {...tableCellKnobs}
                  cellWidth={10}
                  textAlign={'right'}
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
