import React, { FunctionComponent } from 'react'
import { Card } from '@/components/Atoms/Card'
import { Icon } from '@/components/Atoms/Icon'
import { CopyText } from '@/components/Atoms/Typography'
import { css, styled } from '@/styles'
import { StyleguideArrow } from '@matthill8286/jsx-icon-library'
import { Button } from '@/components/Atoms/Button'
import { Picture } from '@/components/Atoms/Picture'
import { isNonEmptyString } from '@/components/Helper/String'

export interface DropdownButtonProps {
  label?: string
  onClick: React.MouseEventHandler
  additionalLabel?: string
  isOpen: boolean
  width?: string | number
  height?: string | number
  primaryIcon?: JSX.Element
  secondaryIcon?: boolean
  className?: string
  pictureSrc?: string
}

export const StyledContainer = styled.div`
  order: 3;
  position: relative;
`

export const StyledDropdown = styled(Card).attrs(() => ({
  elevation: 2,
  shape: 'rounded-small',
  noBorder: 'none',
  padding: '0',
}))<{ showDropdown: boolean; isMobile: boolean }>`
  position: ${({ isMobile }) => (isMobile ? `relative` : `absolute`)};
  left: -100px;
  top: ${({ theme, isMobile }) => (isMobile ? 0 : theme.spacing.base.xxxl)};
  width: 280px;
  margin: ${({ theme }) => theme.spacing.base.sm} 0 0 0;
  opacity: 0;
  visibility: hidden;
  z-index: 99;
  transform: translateY(-${({ theme }) => theme.spacing.base.sm});
  transition: ${({
    theme: {
      transition: { short, defaultEasing },
    },
  }) =>
    `visibility ${short} ${defaultEasing}, opacity ${short} ${defaultEasing}, transform ${short} ${defaultEasing}`};

  ${({ showDropdown }) =>
    showDropdown
      ? css`
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        `
      : ''}
`

const StyledButton = styled(Button)`
  padding: 0 ${({ theme }) => theme.spacing.base.xs};
  align-items: center;
  background-color: transparent;
  border-color: transparent;
  border-radius: ${({ theme }) => theme.dimension.borderRadius1};
  cursor: pointer;
  :active,
  :focus {
    outline: none;
  }

  :hover {
    /* box-shadow: ${({ theme }) => theme.dimension.elevationLevel1}; */
    box-shadow: none;
  }

  ${Icon} {
    padding: 0;
  }

  @media screen and (-ms-high-contrast: active), screen and (-ms-high-contrast: none) {
    /* IE10+ specific styles go here */
    width: 130px;
  }

  &::-moz-focus-inner {
    border: 0;
  }
`

const StyledContentGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const StyledLabel = styled(CopyText).attrs(() => ({
  tag: 'span',
  bold: true,
  color: 'grey5',
  fontSize: 'sm',
}))`
  justify-self: start;
  white-space: nowrap;
`

const StyledIcon = styled(Icon).attrs(() => ({
  color: 'grey5',
  alignContent: 'center',
}))`
  margin: 0;
  align-self: center;
`

const StyledAdditionalLabel = styled(CopyText).attrs(() => ({
  tag: 'span',
  color: 'grey5',
  lineHeight: 'sm',
}))`
  grid-column: 1 / 3;
  justify-self: start;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 9em;
  min-height: ${({ theme }) => theme.font.lineHeight.sm};
`

const StyledPictureElement = styled(Picture)`
  img {
    border-radius: 50%;
  }
`

export const DropdownButton: FunctionComponent<DropdownButtonProps> = ({
  onClick,
  additionalLabel,
  isOpen = false,
  label,
  height,
  width,
  secondaryIcon = false,
  primaryIcon,
  className,
  pictureSrc,
}) => (
  <StyledButton
    className={className}
    actionType="ghost"
    onClick={onClick as React.MouseEventHandler<HTMLElement>}>
    <StyledContentGrid>
      <StyledLabel>{label}</StyledLabel>
      {!isNonEmptyString(pictureSrc) && primaryIcon && (
        <StyledIcon
          height={(height as number) || (width as number)}
          width={width as number}
          padding="0">
          {primaryIcon}
        </StyledIcon>
      )}
      {isNonEmptyString(pictureSrc) && (
        <StyledPictureElement
          height={(height as string) || (width as string)}
          width={width as string}
          src={pictureSrc}
          alt="Picture"
        />
      )}
      {secondaryIcon && (
        <StyledIcon width={16} height={16} rotate={isOpen ? 270 : 90} animate>
          <StyleguideArrow />
        </StyledIcon>
      )}
      {additionalLabel && <StyledAdditionalLabel>{additionalLabel}</StyledAdditionalLabel>}
    </StyledContentGrid>
  </StyledButton>
)
