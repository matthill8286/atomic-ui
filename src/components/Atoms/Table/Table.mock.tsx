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
          assetName: '+ Filtered',
          provider: '+ Filtered',
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
            assetName: '+ Filtered',
            provider: '+ Filtered',
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
