import React, { FC } from 'react'
import { DropdownButton, DropdownButtonProps } from '@/components/Molecules/DropdownButton'
import { media, styled } from '@/styles'

const StyledLanguageButton = styled(DropdownButton)`
  display: none;
  ${media.md} {
    display: block;
  }
`

export const LanguageButton: FC<DropdownButtonProps> = React.memo(
  ({ label, onClick, isOpen, additionalLabel, width, height, primaryIcon }) => {
    return (
      <StyledLanguageButton
        label={label}
        additionalLabel={additionalLabel}
        secondaryIcon
        width={width || height}
        height={height}
        primaryIcon={primaryIcon}
        isOpen={isOpen}
        onClick={onClick}
      />
    )
  }
)
