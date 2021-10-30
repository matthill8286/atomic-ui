import React from 'react'
import { Icon } from '@/components/Atoms/Icon'
import { Like } from '@/components/Atoms/Like'
import { css, styled } from '@/styles/styled'
import { IconLike } from '@matthill8286/jsx-icon-library'
import { ThemeColors } from '@/types'

export interface AssetLikes {
  likes?: string
  bold?: boolean
  color?: ThemeColors
}

const StyledAssetLikes = styled.div(
  ({ theme }) => css`
    position: absolute;
    z-index: 2;
    bottom: calc(${theme.spacing.base.md} - 4px);
    left: calc(${theme.spacing.base.sm} + 1px);
  `
)

export const AssetLikes: React.FC<AssetLikes> = ({
  likes,
  bold = true,
  color = 'white',
  children,
}) => {
  if (!likes) {
    return null
  }

  return (
    <StyledAssetLikes>
      <Like
        color={color}
        bold={bold}
        likes={likes}
        iconLeft={
          <Icon color={color}>
            <IconLike />
          </Icon>
        }>
        {children}
      </Like>
    </StyledAssetLikes>
  )
}
