import * as React from 'react'
import {
  CustomText,
  TableData,
  TableTitle,
  TableWithDescription,
} from './mock/CustomTableMockElements'

export const tableData = [
  {
    type: 'Asset',
    value: 'Danone',
  },
  {
    type: 'Consent',
    value: 'Yes',
  },
  {
    type: 'Who for??',
    value: 'MBNA',
  },
]

export const customTableElements = [
  {
    asset: <TableTitle assetName={'Something about Mary!!!'} provider={'ENCOM'} />,
    assetNumber: '2598172',
    noBorder: true,
  },
  {
    asset: (
      <TableWithDescription
        assetWithTitle={{
          assetName: '+ saiyan',
          provider: '+ saiyan',
        }}
        description={'Fill in the blanks.........'}
      />
    ),
    noBorder: true,
  },
  {
    asset: <TableTitle assetName={'+ Lorem ipsum......'} provider={'+ EHA'} />,
    assetNumber: '2539111',
    noBorder: false,
  },
  {
    asset: <TableTitle assetName={"Dixon's Learning Center"} provider={"Dixon's"} />,
    assetNumber: '2999999',
    noBorder: false,
  },
]

export const customTableElementsMobileData = [
  {
    asset: (
      <TableData
        asset={{
          assetWithTitle: {
            assetName: 'Duality',
            provider: 'Slipknot',
          },
        }}
        subTexts={['Iowa', 'Numbers', 'Engaging']}
      />
    ),
    noBorder: true,
  },
  {
    asset: (
      <TableData
        asset={{
          assetWithTitle: {
            assetName: '+ saiyan',
            provider: '+ saiyan',
          },
          description: 'loads and loads of ice-cream',
        }}
        subTexts={[]}
      />
    ),
    noBorder: true,
  },
  {
    asset: (
      <TableData
        asset={{
          assetWithTitle: {
            assetName: 'Duality',
            provider: 'Slipknot',
          },
        }}
        subTexts={['Iowa', 'Numbers', 'Engaging']}
      />
    ),

    noBorder: true,
  },
  {
    asset: (
      <TableData
        asset={{
          assetWithTitle: {
            assetName: 'Duality',
            provider: 'SOAD',
          },
        }}
        subTexts={['Iowa', 'Numbers', 'Engaging']}
      />
    ),
    noBorder: true,
  },
]

export const customTableElementsTotalPricesData = [
  {
    textLabel: <CustomText text={"Tree's on the ground"} />,
    text: <CustomText text={'10000'} />,
  },
  {
    textLabel: <CustomText text={'Christmas Time'} />,
    text: <CustomText text={'- 4455666'} />,
  },
  {
    textLabel: <CustomText text={'Help is on the way!!!'} />,
    text: <CustomText text={'never for you!!!'} />,
  },
  {
    textLabel: (
      <CustomText
        text={'Weaather'}
        textWeight={'bold'}
        fontSize={'md'}
        additionalInfo={'Sunny Tomorrow'}
        additionalInfoTextAlign={'right'}
      />
    ),
    text: <CustomText text={'Rain in Spain......'} textWeight={'bold'} fontSize={'md'} />,
  },
]

export const cryptoCurrenciesMock = {
  ticker: 'PI_XBTUSD',
  asks: {
    '60472.0': { price: '60472.0', size: 3099, total: 3099 },
    '60473.5': { price: '60473.5', size: 450, total: 3549 },
    '60474.0': { price: '60474.0', size: 2655, total: 6204 },
    '60477.5': { price: '60477.5', size: 2500, total: 8704 },
    '60486.0': { price: '60486.0', size: 450, total: 9154 },
    '60489.5': { price: '60489.5', size: 10, total: 9164 },
    '60490.0': { price: '60490.0', size: 3010, total: 12174 },
    '60490.5': { price: '60490.5', size: 15000, total: 27174 },
    '60493.0': { price: '60493.0', size: 2587, total: 29761 },
    '60494.0': { price: '60494.0', size: 9933, total: 39694 },
    '60496.5': { price: '60496.5', size: 10000, total: 49694 },
    '60498.5': { price: '60498.5', size: 11285, total: 60979 },
    '60500.0': { price: '60500.0', size: 3925, total: 64904 },
    '60500.5': { price: '60500.5', size: 6863, total: 71767 },
    '60501.5': { price: '60501.5', size: 65097, total: 136864 },
    '60502.0': { price: '60502.0', size: 26106, total: 162970 },
    '60502.5': { price: '60502.5', size: 20000, total: 182970 },
    '60505.5': { price: '60505.5', size: 6599, total: 189569 },
    '60506.0': { price: '60506.0', size: 5434, total: 195003 },
    '60506.5': { price: '60506.5', size: 20000, total: 215003 },
    '60508.5': { price: '60508.5', size: 22930, total: 237933 },
    '60509.0': { price: '60509.0', size: 123399, total: 361332 },
    '60509.5': { price: '60509.5', size: 73164, total: 434496 },
    '60511.5': { price: '60511.5', size: 2057, total: 436553 },
    '60512.5': { price: '60512.5', size: 4313, total: 440866 },
  },
  bids: {
    '60400.0': { price: '60400.0', size: 60500, total: 60500 },
    '60402.0': { price: '60402.0', size: 5945, total: 66445 },
    '60410.0': { price: '60410.0', size: 2583, total: 69028 },
    '60413.5': { price: '60413.5', size: 31958, total: 100986 },
    '60417.0': { price: '60417.0', size: 10000, total: 110986 },
    '60418.0': { price: '60418.0', size: 2978, total: 113964 },
    '60418.5': { price: '60418.5', size: 10000, total: 123964 },
    '60420.5': { price: '60420.5', size: 5000, total: 128964 },
    '60422.5': { price: '60422.5', size: 5952, total: 134916 },
    '60423.0': { price: '60423.0', size: 820, total: 135736 },
    '60423.5': { price: '60423.5', size: 10000, total: 145736 },
    '60424.5': { price: '60424.5', size: 10, total: 145746 },
    '60425.0': { price: '60425.0', size: 20000, total: 165746 },
    '60425.5': { price: '60425.5', size: 60486, total: 226232 },
    '60428.5': { price: '60428.5', size: 10000, total: 236232 },
    '60429.0': { price: '60429.0', size: 20715, total: 256947 },
    '60431.5': { price: '60431.5', size: 6580, total: 263527 },
    '60433.5': { price: '60433.5', size: 12500, total: 276027 },
    '60435.0': { price: '60435.0', size: 450, total: 276477 },
    '60436.0': { price: '60436.0', size: 9323, total: 285800 },
    '60437.0': { price: '60437.0', size: 5253, total: 291053 },
    '60442.5': { price: '60442.5', size: 4758, total: 295811 },
    '60443.0': { price: '60443.0', size: 5114, total: 300925 },
    '60443.5': { price: '60443.5', size: 2999, total: 303924 },
    '60446.5': { price: '60446.5', size: 2323, total: 306247 },
  },
  maxPriceSize: 747113,
}
