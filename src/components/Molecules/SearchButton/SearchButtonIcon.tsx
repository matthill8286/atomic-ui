import React, { ReactNode } from 'react'
import { Icon } from '@/components/Atoms/Icon'
import { styled } from '@/styles/styled'
import { IconCross, IconSearch } from '@matthill8286/jsx-icon-library'
import { ThemeColors } from '@/types'
import { TranslatedText } from '@/types/global'
import { IconButton } from '@/components/Atoms/Button'
import { IconSize } from '@/components/Atoms/Input'

export type SearchButtonIconState = 'default' | 'valid' | 'error'

const SearchIconWrapper = styled.div`
  top: 14px;
  position: absolute;
  right: ${({ theme }) => theme.spacing.base.sm};
  height: 100%;

  > button {
    background: none;
    border: none;
    margin: 0;
    padding: 0;
    top: 0;

    outline: none;

    &:focus {
      svg {
        fill: ${({ theme }) => theme.color.grey4};
      }
    }
  }
`

type MapStateToIcon = {
  [key in SearchButtonIconState]: JSX.Element
}

const mapStateToIcon: MapStateToIcon = {
  default: <div />,
  valid: <IconSearch />,
  error: <IconCross />,
}

type MapStateToIconColor = {
  [key in SearchButtonIconState]: ThemeColors
}

const mapStateToIconColor: MapStateToIconColor = {
  default: 'grey4',
  valid: 'success',
  error: 'error',
}

export interface SearchButtonIconProps {
  icon?: ReactNode
  iconLabel?: TranslatedText
  iconSize?: IconSize
  iconState: SearchButtonIconState
  onClick?: React.MouseEventHandler<HTMLDivElement> | React.MouseEventHandler<HTMLElement>
}

export const SearchButtonIcon = (props: SearchButtonIconProps) => {
  const { icon, iconSize = { height: 20, width: 20 }, iconState, onClick, iconLabel } = props
  const color = mapStateToIconColor[iconState]
  const iconComp = (
    <Icon as="span" color={color} {...iconSize}>
      {icon ? icon : mapStateToIcon[iconState]}
    </Icon>
  )

  return (
    <SearchIconWrapper>
      {onClick ? (
        <IconButton
          aria-label={iconLabel}
          height={iconSize.height}
          isInputIcon
          onClick={onClick as React.MouseEventHandler<HTMLElement>}
          width={iconSize.width}>
          {iconComp}
        </IconButton>
      ) : (
        iconComp
      )}
    </SearchIconWrapper>
  )
}
