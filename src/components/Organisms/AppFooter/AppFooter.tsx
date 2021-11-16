import React from 'react'
import { Divider } from '@/components/Atoms/Divider'
import { Picture } from '@/components/Atoms/Picture'
import { CopyText } from '@/components/Atoms/Typography/CopyText'
import { FlexBox } from '@/components/Helper/FlexBox'
import { Row } from '@/components/Helper/Grid/Row'
import { useWindowDimensions } from '@/components/Helper/useWindowDimensions'
import { GroupedActionLinks } from '@/components/Molecules/ActionLink/GroupedActionLinks'
import { breakpoints } from '@/styles'
import { AppFooterProps } from './AppFooter.interface'
import {
  StyledCopyText,
  StyledPicture,
  StyledFooterWrapper,
  StyledGroupedActionLinksWrapper,
  StyledGroupedActionLinks,
} from './AppFooter.styled'
import { useTheme } from '@/utils/helper'

export const AppFooter: React.FC<AppFooterProps> = ({
  logoUrl,
  altText,
  links = [],
  text,
  socialIcons,
}): JSX.Element => {
  const { breakpoint: currentBreakpoint } = useWindowDimensions()
  const { footer } = useTheme()
  const isMobile = currentBreakpoint < breakpoints.md

  return (
    <>
      <Divider color="primary" />
      <StyledFooterWrapper padding={`${footer.padding}`}>
        <Row noMargin>
          <StyledPicture colsXl={3} colsLg={6} colsMd={8} colsSm={8} colsXs={4} align="middle">
            <FlexBox justifyContent="space-between">
              <Picture
                src={logoUrl}
                alt={altText}
                width="107px"
                height="64px"
                objectFit="contain"
              />
              {socialIcons}
            </FlexBox>
          </StyledPicture>
          <StyledGroupedActionLinksWrapper
            colsXl={6}
            colsLg={6}
            colsMd={8}
            colsSm={8}
            colsXs={4}
            align="middle">
            <StyledGroupedActionLinks>
              {links && <GroupedActionLinks links={links} />}
            </StyledGroupedActionLinks>
          </StyledGroupedActionLinksWrapper>
          <StyledCopyText colsXl={3} colsLg={12} colsMd={8} colsSm={8} colsXs={4} align="middle">
            <CopyText color={footer.color} tag="span" fontSize={isMobile ? 'xxs' : 'xs'}>
              {text}
            </CopyText>
          </StyledCopyText>
        </Row>
      </StyledFooterWrapper>
    </>
  )
}
