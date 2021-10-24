import React from 'react'
import { CopyText, Heading } from '@/components/Atoms/Typography'
import { HeadingProps } from '@/components/Atoms/Typography/Heading/Heading.interface'
import { FlexBox, FlexItem, Spacer } from '@/index'
import { styled } from '@/styles/styled'
import { ThemeFontSizes, ThemeFontWeights } from '@/types/theme'
import { InfoText as InfoLine } from '../../Typography/InfoText'

interface TableTitleProps {
  assetName: string
  provider: string
}

interface TableWithDescriptionProps {
  assetWithTitle: TableTitleProps
  description?: string
}

interface TableDataProps {
  asset: TableWithDescriptionProps
  subTexts: string[]
}

const headingProps: HeadingProps = {
  scale: 'level-5',
  tag: 'p',
  color: 'black',
  lineHeight: 'sm',
  fontFamily: 'default',
}

export const StyledTableDescription = styled(CopyText)`
  margin-left: 12px;
`

export const StyledTableDataWrapper = styled(FlexItem)`
  margin-left: 12px;
`

export const TableTitle: React.FC<TableTitleProps> = ({ assetName, provider }) => {
  return (
    <>
      <Heading {...headingProps} margin="0" limitLines={2} data-test="asset-title">
        <CopyText fontSize="sm" tag="span" bold data-test="asset-provider">
          {provider}
        </CopyText>
        {assetName.replace(provider || '', '')}
      </Heading>
    </>
  )
}

export const TableWithDescription: React.FC<TableWithDescriptionProps> = ({
  assetWithTitle,
  description,
}) => {
  return (
    <>
      <TableTitle {...assetWithTitle} />
      {description && (
        <FlexBox flexDirection="row">
          <StyledTableDescription fontSize="sm" tag="span" data-test="asset-description">
            {description}
          </StyledTableDescription>
        </FlexBox>
      )}
    </>
  )
}

export const TableData: React.FC<TableDataProps> = ({ asset, subTexts }) => {
  return (
    <>
      <TableWithDescription {...asset} />
      <Spacer size="xs" />
      {asset.description ? (
        <FlexBox flexDirection="row">
          <StyledTableDataWrapper>
            {subTexts.map((subText, index) => (
              <CopyText key={index} fontSize="xxs" limitLines={0} margin="" tag="p">
                {subText}
              </CopyText>
            ))}
          </StyledTableDataWrapper>
        </FlexBox>
      ) : (
        subTexts.map((subText, index) => (
          <CopyText key={index} fontSize="xxs" limitLines={0} margin="" tag="p">
            {subText}
          </CopyText>
        ))
      )}
    </>
  )
}

interface CustomTextProps {
  text: string
  textWeight?: ThemeFontWeights
  fontSize?: ThemeFontSizes
  additionalInfo?: string
  additionalInfoTextAlign?: 'left' | 'right'
}

export const CustomText: React.FC<CustomTextProps> = ({
  text,
  textWeight = 'semibold',
  fontSize = 'xs',
  additionalInfo,
  additionalInfoTextAlign = 'right',
}) => {
  return (
    <>
      <Heading tag="h1" scale="level-2" weight={textWeight} fontSize={fontSize}>
        {text}
      </Heading>
      {additionalInfo && (
        <InfoLine fontSize={'xs'} textAlign={additionalInfoTextAlign}>
          {additionalInfo}
        </InfoLine>
      )}
    </>
  )
}
