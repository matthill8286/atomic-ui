import React, { forwardRef } from 'react'
import { CopyText, Typo } from '@/components/Atoms/Typography'
import { FlexBox } from '@/components/Helper/FlexBox'
import { SearchDropdownOptionProps } from './SearchDropdown.interface'
import { StyledBorderedTypo, StyledSearchDropdownOption } from './SearchDropdown.styled'

export type Ref = React.JSXElementConstructor<any>

export const SearchDropdownOption = forwardRef(
  (props: SearchDropdownOptionProps, ref: React.Ref<Ref>) => {
    const { active, label, provider, type, competency, onClick } = props
    return (
      // @ts-ignore
      <StyledSearchDropdownOption active={active} onClick={onClick} ref={ref}>
        <CopyText
          tag="div"
          color={active ? 'grey6' : 'grey4'}
          bold={active}
          fontSize="sm"
          margin="0 0 xs 0">
          {label}
        </CopyText>
        <FlexBox display="inline-flex">
          <StyledBorderedTypo
            display="inline-flex"
            tag="div"
            color={'grey4'}
            fontSize="xs"
            padding="0 sm 0 0">
            {provider}
          </StyledBorderedTypo>
          <StyledBorderedTypo
            display="inline-flex"
            tag="div"
            color={'grey4'}
            fontSize="xs"
            padding="0 sm">
            {type}
          </StyledBorderedTypo>
          <Typo display="inline-flex" tag="div" color={'grey4'} fontSize="xs" padding="0 sm">
            {competency}
          </Typo>
        </FlexBox>
      </StyledSearchDropdownOption>
    )
  }
)

SearchDropdownOption.displayName = 'SearchDropdownOption'
