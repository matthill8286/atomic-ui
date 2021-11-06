# saiyan styled-components rules

## `styled-components` related files structure

All `styled-components` related files can be found in `src/styles` directory:

```
src/styles/
└── sc-global.ts
└── sc-vars-global.ts
└── sc-vars-saiyan.ts
└── sc-vars-another.ts
└── media.ts
└── animation.ts
└── mixins.ts
└── sharedStyles/
    └── index.ts
```

## CSS reset

To reset CSS, we're using `normalize` from `styled-normalize` library in combination with `createGlobalStyle` API. Global styles are set in `/styles/sc-global.js`

## Naming convention

- `styled-components` const name is always `PascalCase (UpperCamelCase)` and should contain `Styled` keyword at the beginning: `const StyledButton`
- Re-usable styling within the component needs to have the `set` keyword in the name: `const setMargins = ...`
- The name of an external file with styles should be called `[ComponentName].styled.ts`, e.g: `Footer.styled.ts`

## Where to place your styles

1. Place your styles right after the imports, at the top of the file.
2. Move your styles to the seperate file named `[ComponentName].styled.ts`, if the styling code has more than 100 lines

## Sharing styles

To avoid code duplications, extend your styles within your component (if the styles are only re-used within the component)

### -- OR --

To share the styles between components, put them into the `styles/sharedStyles/index.ts`.

## Syntax

We're writing `styled-components` css as `template-strings`, e.g.:

```js
const StyledElement = styled.div`
  display: none;
`
```

## Props

To get a specific prop in the styled element, we're using destructuring, e.g.:

```js
const StyledElWithBorder = styled.div`
  border-color: ${({ actionType, theme }) =>
      actionType === 'ghost' || actionType === 'secondary' ? theme.color.grey5 : theme.color.white}
    transparent transparent transparent;
`
```

### Passing Props - Alternative solution

There is an alternative solution for passing props, which is very handy, especially when working with many props.
Instead of directly defining a tagged string literal, a function can be defined, which takes props as arguments
and returns a string literal. This reduces the overhead of defining the arguments list for template-functions and
allows to use the props directly.

Example:

```tsx
const StyledTest = styled.div(
  ({ color, background, padding }) => `
  color: ${color};
  background-color: ${background}
  padding: ${padding};
  `
)
```

Although there is no example of this exact approach in the official documentation, there is a slight variation, which is
show-cased for [Style Objects](https://www.styled-components.com/docs/advanced#style-objects)).

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

Sometimes it's needed to pass props like `className`. For example the prop `className` is needed to extend or override the origin style as the following snippet shows:

```ts
export const StyledPriceEel = styled(EnergyEfficiency)`
  position: relative;
  margin-bottom: ${({ theme }) => theme.spacing.base.xxs};
`
```

If you want allow the extending or overriding you have to add `className` to your interface:

```ts
export interface EnergyEfficiencyProps {
  grade: EnergyEfficiencyGrade
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void
  direction?: EnergyEfficiencyDirection
  size?: EnergyEfficiencySize
  className?: string
}
```

Note: Please use allways the precise prop you need. Do **not** just allow all standard attributes via `...otherProps` or similar.

## Animations

All the css animations should be used from the `src/styles/animation.ts` file

## To Type Or Not To Type... ⚔️

Your styled component should be typed. For each styled component there should be an interface with the props for the styled element. The naming convention for the interfaces is the same as for the styled comoonents - the interface should start with the `Styled` keyword, e.g.:

```js
interface StyledElementProps = {
  isDisplayed: boolean
}
const StyledElement = styled.div<StyledProps>`
  display: ${({isDisplayed}) => isDisplayed ? 'block;': 'none;'}
`
```

Note: The interface should be moved into the interface file, if there's more than two interfaces in total.

### Reusage of Interfaces

If you may think the interface can be reused, f.e. for stylings or product informations - put into the '@/types/` folder to make it reusable by other components and prevent duplication of code.

## Polished library

To polish our styling, we're using the [polished](https://github.com/styled-components/polished) library from `styled-components`.
E.g. instead of creating another color variable to have a color shade, we're just using `ligthen` from `polished`:

```js
background: lighten(0.2, '#CCCD64')
```

## Nesting

In general we should avoid nesting. If the nesting cannot be avoided, limit the nesting on the 3rd level. So please don't nest your css styling more than three levels down.
Exception: 3rd party libs/plugins.

### HTML Example:

```
<div className="parent">
  <div className="nested1">
    <div className="nested2">
      <div className="nested3">
        <div className="nested4"></div>
      </div>
    </div>
  </div>
</div>
```

### Perfect code:

```js
const StyledParent = styled.div`color: white;`
const StyledNested1 = styled.div`color: black;`
const StyledNested2 = styled.div`color: red;`
const StyledNested3 = styled.div`color: yellow;`
const StyledNested4 = styled.div`color: pink;`

<StyledParent>
  <StyledNested1>
    <StyledNested2>
      <StyledNested3>
        <StyledNested4 />
      </StyledNested2>
    </StyledNested2>
  </StyledNested1>
</StyledParent>
```

### OK code

```js
const StyledParent = styled.div`color: white;`
const StyledNested1 = styled.div`
  color: black;
  div.nested2 {
    color: red;
    div.nested3 {
      color: yellow;
      div.nested4 {
        color: pink;
      }
    }
  }
`

<StyledParent>
  <StyledNested1>
    <div className="nested2">
      <div className="nested3">
        <div className="nested4"></div>
      </div>
    </div>
  </StyledNested1>
</StyledParent>
```

### BAD code

```js
const StyledParent = styled.div`
  color: white;
  div.nested1 {
    color: black;
    div.nested2 {
      color: red;
      div.nested3 {
        color: yellow;
        div.nested4 {
          color: pink;
        }
      }
    }
  }
`

<StyledParent>
  <div className="nested1">
    <div className="nested2">
      <div className="nested3">
        <div className="nested4"></div>
      </div>
    </div>
  </div>
</StyledParent>
```

## Media Queries

All the breakpoints are defined in the `src/styles/sc-vars-global.js`. These breakpoints are used for the media queries in the `src/styles/media.ts`. The styling for all the components should follow the `mobile-first` approach.
☝️ In the media.ts we still support `max-width` due to some legacy logic.

How to use media queries with `styled-components`:

```js
import { styled } from '@/styles/styled'
import media from 'path-to-media-file'
const StyledComponent = styled.div`
  display: none;
  ${media.lg} {
    display: block;
  }
`
```
