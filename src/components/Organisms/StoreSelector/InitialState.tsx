/* global JSX */
import React from 'react'
import { IconAddToPlaylist } from '@matthill8286/atomic-icon-library'
import { InitialStateWrapper, CopyTextCentralized, SVGCentralized } from './StoreSelector.styled'
// eslint-disable-next-line prettier/prettier
import type { InitialStateProps } from './StoreSelector.types'

export function InitialState({ text, children }: InitialStateProps): JSX.Element {
  return (
    <InitialStateWrapper>
      <SVGCentralized width={108} height={108}>
        <IconAddToPlaylist />
      </SVGCentralized>
      <CopyTextCentralized fontSize="md" weight="semibold" tag="p" textAlign="center">
        {text}
      </CopyTextCentralized>
      {children}
    </InitialStateWrapper>
  )
}
