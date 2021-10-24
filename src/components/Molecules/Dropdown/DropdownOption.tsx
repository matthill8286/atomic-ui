import React from 'react'
import { CopyText } from '@/components/Atoms/Typography'
import { IconDone } from '@excelwithbusiness/webmobile-svg-library'
import { DropdownOptionProps, StyledDropdownOptionProps } from './Dropdown.interface'
import { StyledDone, StyledDropdownOption } from './Dropdown.styled'

export const DropdownOption: React.FC<DropdownOptionProps & StyledDropdownOptionProps> = props => {
  const { active, label, onClick, checkmark } = props
  return (
    <StyledDropdownOption active={active} onClick={onClick} checkmark={checkmark}>
      {checkmark && active && (
        <StyledDone width={16} height={16} color="grey5">
          <IconDone />
        </StyledDone>
      )}
      <CopyText tag="strong" color={active ? 'grey6' : 'grey4'} fontSize="sm">
        {label}
      </CopyText>
    </StyledDropdownOption>
  )
}

DropdownOption.displayName = 'DropdownOption'
