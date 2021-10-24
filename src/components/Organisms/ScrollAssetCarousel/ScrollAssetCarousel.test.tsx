import 'jest-styled-components'
import React from 'react'
import { SkeletonBlockItem } from '@/components/Atoms/Skeleton'
import { ScrollSnapSlider } from '@/components/Molecules/ScrollSnapSlider'
import { mountWithThemeAndRouter, renderWithThemeAndRouter } from '@/testRenderer'
import { Asset } from '@/types/asset'
import { assetNames, mockAssets } from '../AssetTile/elements/mocks'
import { AssetCarousel } from './ScrollAssetCarousel'
import { ScrollAssetCarouselProps } from './ScrollAssetCarousel.interface'

describe('Asset Carousel', () => {
  let carouselProps: ScrollAssetCarouselProps
  const assets: Asset[] = []

  for (let i = 0; i < assetNames.length; i++) {
    assets.push(mockAssets[assetNames[i]])
  }

  beforeEach(() => {
    carouselProps = {
      loading: false,
      lazyLoad: true,
      tileWidth: 375,
      context: 'dashboard',
      assets: [...assets],
      slidesPerPageSettings: { desktop: 3, tablet: 2, mobileSmall: 1, mobileBig: 1 },
      NoAssetsComponent: null,
      onAssetClick: () => {},
      onSlideChange: () => {},
    }
  })

  it('renders the Scroll Snap Slider', () => {
    const wrapper = renderWithThemeAndRouter(<AssetCarousel {...carouselProps} />)
    expect(wrapper).toBeDefined()
  })

  describe('with loading state', () => {
    it.skip('renders as skeleton', () => {
      const wrapper = mountWithThemeAndRouter(<AssetCarousel {...carouselProps} loading={true} />)
      expect(wrapper).toBeDefined()
      expect(wrapper.find(ScrollSnapSlider)).toBeDefined()
      expect(wrapper.find(SkeletonBlockItem).length).toEqual(3)
    })
  })

  describe('with promoted element', () => {
    const PromotedElement: React.FC = () => <div>I am Promoted</div>
    it('renders given element', () => {
      const wrapper = mountWithThemeAndRouter(
        <AssetCarousel {...carouselProps} promotedIndex={2} promoted={<PromotedElement />} />
      )
      expect(wrapper).toBeDefined()
      expect(wrapper.find(PromotedElement)).toBeDefined()
    })
  })
})
