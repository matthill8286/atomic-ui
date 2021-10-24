import React from 'react'
import { SimpleCarousel } from '@/components/Molecules/SimpleCarousel'
import { mountWithTheme, renderWithTheme } from '@/testRenderer'
import { Asset } from '@/types/asset'
import { LazyAssetCarousel } from './LazyAssetCarousel'
import { assetNames, mockAssets } from '@/components/Organisms/AssetTile'

const MockAssetContextWrapperComponent: React.FC<any> = ({ children }) => children

describe('Lazy Asset Carousel', () => {
  let carouselProps
  const assets: Asset[] = []

  for (let i = 0; i < assetNames.length; i++) {
    assets.push(mockAssets[assetNames[i]])
  }

  beforeEach(() => {
    carouselProps = {
      AssetContextWrapperComponent: MockAssetContextWrapperComponent,
      loading: false,
      lazyLoad: false,
      context: 'home',
      assets: [...assets],
      onAssetClick: () => {},
      onEnergyClick: () => {},
      onSlideChange: () => {},
    }
  })

  it('renders without crashing', () => {
    const wrapper = renderWithTheme(<LazyAssetCarousel {...carouselProps} />)
    expect(wrapper).toBeDefined()
  })

  it.skip('renders snapshot', () => {
    const wrapper = renderWithTheme(<LazyAssetCarousel {...carouselProps} />)
    expect(wrapper).toMatchSnapshot()
  })

  describe('with ssr and client', () => {
    it.skip('renders for ssr', () => {
      const wrapper = mountWithTheme(<LazyAssetCarousel {...carouselProps} ssr />)
      const carousels = wrapper.find(SimpleCarousel)
      expect(carousels.length).toBe(3)
    })

    it('renders for client', () => {
      const wrapper = mountWithTheme(<LazyAssetCarousel {...carouselProps} />)
      const carousels = wrapper.find(SimpleCarousel)
      expect(carousels.length).toBe(1)
    })

    describe('with loading state', () => {
      it('renders as skeleton', () => {
        const wrapper = mountWithTheme(<LazyAssetCarousel {...carouselProps} loading />)
        expect(wrapper).toBeDefined()
      })

      it('renders with lazyload', () => {
        const wrapper = mountWithTheme(<LazyAssetCarousel {...carouselProps} loading lazyLoad />)
        expect(wrapper).toBeDefined()
      })
    })
  })
})
