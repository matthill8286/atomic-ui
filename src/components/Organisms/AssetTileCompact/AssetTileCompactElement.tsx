import React from 'react'
import { SkeletonBlockItem, SkeletonInlineItem } from '@/components/Atoms/Skeleton'
import { AssetTileCompactChildProps } from './AssetTileCompact.interface'
import {
  StyledContentColumn,
  StyledIconsWrapper,
  StyledAssetTileCompactElementWrapper,
  StyledRightIconsInfoText,
  StyledRightIconsWrapper,
  StyledInformationTypo,
} from './AssetTileCompact.styled'
import { CopyText, Typo } from '@/components/Atoms/Typography'
import { FlexBox, useWindowDimensions } from '@/components/Helper'
import { StyledAssetInformation } from '@/components/Organisms/AssetTileCompact/elements'
import { breakpoints } from '@/styles'

export const AssetTileCompactElement: React.FC<AssetTileCompactChildProps> = ({
  children,
  headerFontSize,
  loading = false,
  provider,
  iconsComponent,
  showInteractions = true,
  type,
  competency,
  label,
  description,
  title,
  mobile,
  ...props
}) => {
  const { breakpoint: currentBreakpoint } = useWindowDimensions()
  const isMobile = currentBreakpoint < breakpoints.md

  const renderRightIcons = () => {
    if (!iconsComponent) {
      return null
    }

    return (
      <>
        {loading ? (
          <>
            <SkeletonInlineItem text="interaction icons" />
            <SkeletonBlockItem width="300px" height="10px" />
          </>
        ) : (
          <StyledRightIconsInfoText fontSize="xs" weight="bold">
            <StyledIconsWrapper>{iconsComponent}</StyledIconsWrapper>
          </StyledRightIconsInfoText>
        )}
      </>
    )
  }

  const assetInformation = !loading ? (
    <>
      <CopyText
        limitLines={2}
        tag="div"
        display="flex"
        color={'grey6'}
        fontSize="md"
        margin="sm 0 0">
        {title}
      </CopyText>
      {!isMobile ? (
        <FlexBox display="inline-flex">
          {provider ? (
            <StyledInformationTypo
              display="inline-flex"
              tag="div"
              color={'grey4'}
              fontSize="xs"
              padding="0 sm 0 0">
              {provider}
            </StyledInformationTypo>
          ) : null}
          {type ? (
            <StyledInformationTypo
              display="inline-flex"
              tag="div"
              color={'grey4'}
              fontSize="xs"
              padding="0 sm">
              {type}
            </StyledInformationTypo>
          ) : null}
          {competency ? (
            <Typo display="inline-flex" tag="div" color={'grey4'} fontSize="xs" padding="0 sm">
              {competency}
            </Typo>
          ) : null}
        </FlexBox>
      ) : null}
    </>
  ) : (
    <>
      <SkeletonInlineItem text="asset title" margin="sm 0" />
      <SkeletonInlineItem text="asset meta info" margin="0" />
    </>
  )

  return (
    <StyledAssetTileCompactElementWrapper {...props}>
      <StyledContentColumn>
        <StyledAssetInformation>{assetInformation}</StyledAssetInformation>
      </StyledContentColumn>
      <StyledRightIconsWrapper>
        {showInteractions && !loading && (
          <StyledIconsWrapper>{renderRightIcons()}</StyledIconsWrapper>
        )}
        {children}
      </StyledRightIconsWrapper>
    </StyledAssetTileCompactElementWrapper>
  )
}
