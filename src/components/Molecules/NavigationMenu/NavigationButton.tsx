import React, { FC } from 'react'
import { DropdownButton, DropdownButtonProps } from '@/components/Molecules/DropdownButton'
import { media, styled } from '@/styles'
import { IconUser as UserIcon } from '@excelwithbusiness/webmobile-svg-library'

export const StyledDropdownButton = styled(DropdownButton)`
  display: none;
  ${media.sm} {
    display: inline;
  }
`

export const NavigationButton: FC<DropdownButtonProps> = React.memo(
  ({ label, onClick, isOpen, additionalLabel, width, height, pictureSrc }) => {
    return (
      <StyledDropdownButton
        label={label}
        width={width || height}
        height={height}
        additionalLabel={additionalLabel}
        primaryIcon={<UserIcon height={40} width={40} />}
        isOpen={isOpen}
        onClick={onClick}
        pictureSrc={pictureSrc}
      />
    )
  }
)
