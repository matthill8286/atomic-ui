# saiyan styled-components exposed parts

## `@matthill8286/saiyan-component-library` related props and helpers

## Atoms

## Molecules

## Organisms

## Helpers

## Overriding styles depending on props

```js
// Declaring the styled component
const Button = styled.button`
  color: white;
  ${({isSecondary}) => isSecondary && 'color: blue;'}
  ${({isDisabled}) => isDisabled && 'color: grey;'}
`
// Using the disabled iteration of the styled component
<Button isDisabled />
```

## Pass standard attributes of the HTML Element

If you want allow the extending or override then you have to add `className` to your interface:

```ts
export interface SomethingProps {
  grade: SomethingGrade
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void
  direction?: SomethingDirection
  size?: SomethingSize
  className?: string
}
```

Note: Please use always the precise prop you need. Do **not** just allow all standard attributes via `...otherProps` or similar.

Note: The interface should be moved into the interface file, if there's more than two interfaces in total.

## Media Queries

How to use media queries with `@saiyan/webmobile-sc-components`:

```js
import { styled, media } from '@saiyan/webmobile-sc-components'
import media from 'path-to-media-file'
const StyledComponent = styled.div`
  display: none;
  ${media.lg} {
    display: block;
  }
`
```

## Themes

How to use themes with `@saiyan/webmobile-sc-components`:
