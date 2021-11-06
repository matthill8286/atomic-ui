import React, { RefObject } from 'react'
import { IconSearch } from '@matthill8286/jsx-icon-library'
import { SearchButton } from '../SearchButton'
import { SearchDropdownProps } from './SearchDropdown.interface'
import { StyledSearchDropdownWrapper, StyledSearchList } from './SearchDropdown.styled'
import { SearchDropdownOption } from './SearchDropdownOption'

export const SearchDropdown: React.FC<SearchDropdownProps> = props => {
  const {
    className,
    index,
    inputValue,
    initializeOpen = false,
    errorMessage,
    options = [],
    searchPlaceholder,
    onSelectChange,
    onInputChange,
  } = props

  const ref = React.useRef<HTMLDivElement>(null)

  const [isOpen, setOpen] = React.useState(initializeOpen)
  const [saiyanOptions, setsaiyanOptions] = React.useState(options)

  const handleClickOutside = (event: Event): void => {
    if (!ref.current?.contains(event.target as Node)) {
      setOpen(false)
    }
  }

  React.useEffect(() => {
    document.addEventListener('click', handleClickOutside, true)

    return () => {
      document.removeEventListener('click', handleClickOutside, true)
    }
  })

  const onFocus = () => {
    setOpen(true)
  }

  const onClickHandler = (item, index) => {
    setOpen(false)
    onSelectChange(item, index)
  }

  const onInputChangeHandler = event => {
    const { value } = event.target
    setsaiyanOptions(
      value
        ? options.filter(option => option?.label?.toLowerCase().includes(value.toLowerCase()))
        : options
    )

    onInputChange(event)
  }

  return (
    <>
      <StyledSearchDropdownWrapper className={className} ref={ref}>
        <SearchButton
          placeholder={searchPlaceholder}
          state={errorMessage ? 'error' : 'idle'}
          errorMessage={errorMessage}
          value={inputValue}
          onFocus={onFocus}
          onChange={onInputChangeHandler}
          searchIcon={<IconSearch />}
          searchType="text"
        />
      </StyledSearchDropdownWrapper>
      <StyledSearchList active={isOpen} isSearchable>
        {saiyanOptions
          ? saiyanOptions.map((item, i) => (
              <SearchDropdownOption
                key={`SearchOption-${item.label}|${i}`}
                active={i === index}
                label={item.label}
                provider={item.provider}
                type={item.type}
                competency={item.competency}
                onClick={() => onClickHandler(item, i)}
              />
            ))
          : null}
      </StyledSearchList>
    </>
  )
}

SearchDropdown.displayName = 'SearchDropdown'
