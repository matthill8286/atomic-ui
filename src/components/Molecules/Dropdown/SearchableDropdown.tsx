import React from 'react'
import { Input } from '@/components/Atoms/Input'
import { IconShare } from '@matthill8286/atomic-icon-library'
import { SearchableDropdownProps } from './Dropdown.interface'
import { StyledList, StyledSearchableDropdownWrapper } from './Dropdown.styled'
import { DropdownOption } from './DropdownOption'

export const SearchableDropdown: React.FC<SearchableDropdownProps> = props => {
  const {
    className,
    index,
    inputValue,
    initializeOpen = false,
    label,
    errorMessage,
    options = [],
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
        ? options.filter(option => option.label.toLowerCase().includes(value.toLowerCase()))
        : options
    )

    onInputChange(event)
  }

  return (
    <StyledSearchableDropdownWrapper className={className} ref={ref}>
      <Input
        state={errorMessage ? 'error' : 'idle'}
        errorMessage={errorMessage}
        label={label}
        value={inputValue}
        onFocus={onFocus}
        onChange={onInputChangeHandler}
        inputIcon={<IconShare />}
        inputType="text"
      />
      <StyledList active={isOpen} isSearchable={true}>
        {saiyanOptions.map((item, i) => (
          <DropdownOption
            key={i}
            active={i === index}
            label={item.label}
            onClick={() => onClickHandler(item, i)}
          />
        ))}
      </StyledList>
    </StyledSearchableDropdownWrapper>
  )
}

SearchableDropdown.displayName = 'SearchableDropdown'
