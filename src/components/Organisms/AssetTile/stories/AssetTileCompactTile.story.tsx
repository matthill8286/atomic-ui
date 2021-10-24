import React from 'react'
import { Meta, Story } from '@storybook/react'
import { AssetTileLayout, AssetTileProps, newAssetMocks } from '@/components/Organisms/AssetTile'
import { StorybookWrapper } from '@/utils/StorybookWrapper'
import { AssetTileCompactTile } from '@/components/Organisms/AssetTile/AssetTileCompactTile'
import { styled } from '@/styles'
import { IconButton } from '@/components/Atoms/Button'
import { Icon } from '@/components/Atoms/Icon'
import { StyleguideBookmarkActive } from '@/svgs'

const StyledIconButton = styled(IconButton)`
  border: none;
  display: flex;
  padding: 0;
  min-width: auto;
  justify-content: center;
  margin-right: 20px;
`

export default {
  title: 'Design System/Organisms/AssetTile/Compact',
  component: AssetTileCompactTile,
  argTypes: { onClick: { action: 'clicked' } },
} as Meta

const Wrapper = ({ children }) => <StorybookWrapper>{children}</StorybookWrapper>

const Template: Story<AssetTileProps> = (args: AssetTileProps) => (
  <Wrapper>
    <AssetTileCompactTile {...args} layout={AssetTileLayout.compact} />
  </Wrapper>
)

export const Default = Template.bind({})

Default.args = {
  asset: newAssetMocks[0],
  orientation: 'landscape',
  renderAddToBookmarkButton: () => (
    <StyledIconButton>
      <Icon color="grey5" height="md">
        <StyleguideBookmarkActive />
      </Icon>
    </StyledIconButton>
  ),
}
