# Search

Use Search component for all searchable requirements.

The `state` prop can be used to manage validation and appereance.

The `inputStyle` large can be used when the focus of the page is the form, use this size. Desktop only.
The `inputStyle` dense is used mainly on mobile, or on desktop when a form is secondary use only.

```js
export type SearchStyle = 'default' | 'dense' | 'large'
export type SearchType = 'text' | 'search'
export type SearchMode = 'none' | 'text' | 'search'
export type SearchState = 'idle' | 'valid' | 'error' | 'disabled'

export type MapSearchStateToColor = {
  [key in SearchState]: ThemeColors
}

export interface SearchIconSize {
  height: number
  width: number
}

export interface SearchProps extends InputProps {
  searchStyle?: SearchStyle
  searchType?: SearchType
  state?: SearchState
  searchProps?: React.InputHTMLAttributes<HTMLInputElement>
  searchIcon?: ReactElement<IconProps>
}

```

The search is currently triggering this `events`: `onClick, onClickIcon, onChange, onKeyDown, onKeyUp, onBlur, onFocus, onMouseEnter, onMouseLeave`.

Since the storysource is not available when we use `withState` this is the stories source:

```js


```
