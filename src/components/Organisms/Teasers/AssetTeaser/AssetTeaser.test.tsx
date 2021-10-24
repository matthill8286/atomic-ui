import React from 'react'
import { Card } from '@/components/Atoms/Card'
import { mountWithThemeAndRouter, renderWithThemeAndRouter } from '@/testRenderer'
import { AssetTeaser } from './AssetTeaser'

describe('TopTeaser', () => {
  it('renders correctly: default AssetTeaser with minimal configuration', () => {
    const tree = renderWithThemeAndRouter(
      <AssetTeaser headline="High standards require sensible processes" elevation={0} />
    )
    expect(tree).toMatchSnapshot()
  })
  it('renders correctly: default AssetTeaser with maximum configuration', () => {
    const tree = renderWithThemeAndRouter(
      <AssetTeaser
        backgroundImage="public/images/small.jpg"
        elevation={0}
        backgroundVariant="tongue"
        contentText="Well, the answer is obvious: “He hasn’t died yet.” Fortunately, for us, Munger has kept on ticking."
        featuredAssetImages={[
          { image: 'public/images/featured_assets/featured_asset_01.png' },
          { image: 'public/images/featured_assets/featured_asset_03.png' },
        ]}
        headline="High standards require sensible processes"
        assetImage="public/images/teasers/product02.png"
        tags={['73 assets', '23hours 18minutes', '3% completed']}
      />
    )
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly: AssetTeaser', () => {
    const tree = renderWithThemeAndRouter(
      <AssetTeaser
        backgroundImage="public/images/small.jpg"
        elevation={0}
        backgroundVariant="tongue"
        contentText="Well, the answer is obvious: “He hasn’t died yet.” Fortunately, for us, Munger has kept on ticking."
        featuredAssetImages={[
          { image: 'public/images/featured_assets/featured_asset_01.png' },
          { image: 'public/images/featured_assets/featured_asset_03.png' },
        ]}
        headline="High standards require sensible processes"
        tags={['73 assets', '23hours 18minutes', '3% completed']}
      />
    )
    expect(tree).toMatchSnapshot()
  })

  it('triggers click handler', () => {
    const clickHandler = jest.fn()

    const tree = mountWithThemeAndRouter(
      <AssetTeaser
        elevation={0}
        headline="High standards require sensible processes"
        onClick={clickHandler}
      />
    )
    tree.find(Card).simulate('click')

    expect(clickHandler).toHaveBeenCalled()
  })
})
