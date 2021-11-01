import React from 'react'
import { IconButton } from '@/components/Atoms/Button'
import { css, styled } from '@/styles/styled'
import { StyleguideLock, StyleguideLockOpenOutlined } from '@matthill8286/jsx-icon-library'
import { ThemeColors } from '@/types'
import { Icon } from '@/components/Atoms/Icon'

export interface AssetLockedProps {
  color?: ThemeColors
  onLockClick?: ((ev: React.MouseEvent<HTMLElement, MouseEvent>) => void) | undefined
  outlined?: boolean
  locked?: boolean
}

const StyledAssetLocked = styled.div(
  ({ theme }) => css`
    position: absolute;
    z-index: 10;
    display: flex;
    bottom: calc(${theme.spacing.base.sm} - 0.5px);
    right: calc(${theme.spacing.base.sm} + 1px);
  `
)

const StyledIconButton = styled(IconButton)`
  border: none;
  display: flex;
  padding: 0;
  min-width: auto;
  justify-content: center;
`

export const AssetLocked: React.FC<AssetLockedProps> = ({
  color = 'grey6',
  onLockClick,
  locked,
}) => {
  if (!locked) {
    return null
  }
  return (
    <StyledAssetLocked>
      <StyledIconButton isFlat round onClick={onLockClick}>
        <Icon color={color} height="md">
          <StyleguideLock />
        </Icon>
      </StyledIconButton>
    </StyledAssetLocked>
  )
}
