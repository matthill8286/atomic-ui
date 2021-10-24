import React from 'react'
import { CopyText } from '@/components/Atoms/Typography'
import { SearchButtonProps } from './SearchButton.interface'
import { StyledInputSearch, StyledInputSearchWrapper } from './SearchButton.styled'
import { SearchButtonIcon, SearchButtonIconState } from './SearchButtonIcon'

const mapStateToIconState = {
  valid: 'valid',
  error: 'error',
}

export const SearchButton: React.FC<SearchButtonProps> = props => {
  const {
    autofocus = false,
    className,
    errorMessage,
    iconLabel,
    searchIcon,
    inputIconSize,
    searchProps,
    inputRef,
    searchType = 'text',
    margin = '',
    onBlur,
    onChange,
    onClick,
    onClickIcon,
    onFocus,
    onKeyDown,
    onKeyUp,
    onMouseEnter,
    onMouseLeave,
    padding = '',
    placeholder = 'Search',
    state = 'idle',
    value,
  } = props

  const onMouseEnterHandler = (ev: React.MouseEvent<HTMLInputElement>) => {
    if (onMouseEnter) onMouseEnter(ev)
  }

  const onMouseLeaveHandler = (ev: React.MouseEvent<HTMLInputElement>) => {
    if (onMouseLeave) onMouseLeave(ev)
  }

  const onFocusHandler = (ev: React.FocusEvent<HTMLInputElement>) => {
    if (onFocus) onFocus(ev)
  }

  const onBlurHandler = (ev: React.FocusEvent<HTMLInputElement>) => {
    if (onBlur) onBlur(ev)
  }

  const onChangeHandler = (ev: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) onChange(ev)
  }

  const onClickHandler = (ev: React.MouseEvent<HTMLInputElement>) => {
    ev.stopPropagation()
    if (onClick) onClick(ev)
  }

  const onClickIconHandler = (ev: React.MouseEvent<HTMLInputElement>) => {
    ev.stopPropagation()

    if (onClickIcon) {
      onClickIcon(ev)
    }
  }

  const showError = state === 'error' && errorMessage
  const showIcon = state === 'valid' || state === 'error' || searchIcon
  const iconState: SearchButtonIconState = mapStateToIconState[state] || 'default'

  const combinedSearchButtonProps = {
    ...searchProps,
    placeholder: placeholder,
    autoFocus: autofocus,
    type: searchType,
    value,
    onMouseEnter: onMouseEnterHandler,
    onMouseLeave: onMouseLeaveHandler,
    onClick: onClickHandler,
    onFocus: onFocusHandler,
    onChange: onChangeHandler,
    onKeyUp: onKeyUp,
    onKeyDown: onKeyDown,
    onBlur: onBlurHandler,
  }

  return (
    <StyledInputSearchWrapper className={className} margin={margin} padding={padding}>
      <StyledInputSearch {...combinedSearchButtonProps} ref={inputRef} />

      {showIcon && (
        <SearchButtonIcon
          icon={searchIcon}
          iconLabel={iconLabel}
          iconSize={inputIconSize}
          iconState={iconState}
          onClick={onClickIcon ? onClickIconHandler : undefined}
        />
      )}

      {showError && (
        <CopyText tag="span" color="error" fontSize="xxs">
          {errorMessage}
        </CopyText>
      )}
    </StyledInputSearchWrapper>
  )
}

SearchButton.displayName = 'SearchButton'
