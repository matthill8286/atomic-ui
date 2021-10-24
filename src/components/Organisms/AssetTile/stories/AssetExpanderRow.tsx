import * as React from 'react'
import { Cell } from '@/components/Helper/Grid'
import { TwelveColumn } from '@/components/Helper/Grid/Grid.interface'
import { AssetTile } from '../AssetTile'
import { AssetTileProps } from '../AssetTile.interface'
import { Asset } from '@/types'

interface AssetTileExpanderRowProps extends Omit<AssetTileProps, 'asset'> {
  assets: Asset[]
}

export class AssetTileExpanderRow extends React.Component<
  AssetTileExpanderRowProps,
  { expanded: boolean }
> {
  state = {
    expanded: false,
  }

  setExpanded(expanded: boolean) {
    this.setState({ expanded })
  }

  render() {
    return (
      <>
        {this.props.assets.map((asset, index) => (
          <Cell columns={(12 / this.props.assets.length) as TwelveColumn} key={index}>
            <AssetTile {...this.props} layout={this.props.layout} asset={asset} />
          </Cell>
        ))}
      </>
    )
  }
}
