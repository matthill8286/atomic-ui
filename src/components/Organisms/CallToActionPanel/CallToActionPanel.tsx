import React from 'react'
import { LazyLoadImage } from '@/components/Molecules/LazyLoadImage'
import { media, spacing } from '@/styles'
import { styled } from '@/styles/styled'
import { Section } from '@/components/Atoms/Section'
import {
  ActionElement,
  CallToActionElement,
} from '@/components/Organisms/CallToActionPanel/CallToActionElement'
import { AssetTile, AssetTileAsset, AssetTileLayout } from '@/components/Organisms/AssetTile'
import { ShowMoreProps } from '@/components/Atoms/ShowMore'

interface ItemProps {
  order: number
}

const StyledAssetTile = styled.div`
  width: 100%;
  ${media.maxSm} {
    width: 90%;
    margin: 0 auto;
  }
`

export const StyledCtaTextColumn = styled.div<{ alignment: CallToActionPanelProps['alignment'] }>`
  flex-basis: 100%;
  flex-wrap: nowrap;
  flex-direction: column;
  margin: ${spacing.base.xs} auto;
  padding: ${spacing.base.sm} ${spacing.base.md};

  ${media.md} {
    flex-direction: row;
    flex: 1;
    padding: ${spacing.base.lg};
    margin: ${spacing.base.sm} 0;
  }
`

export const StyledCtaImageColumn = styled.div<
  ItemProps & { alignment: CallToActionPanelProps['alignment'] }
>`
  order: unset;
  flex: unset;
  flex-direction: column;
  display: flex;
  padding: 0;
  margin: ${spacing.base.sm} 0;

  > svg,
  img {
    margin: 0 auto;
  }

  ${media.md} {
    flex-direction: row;
    flex: 0.5;
    margin: ${spacing.base.sm} 0;
    padding-right: ${({ alignment }) => (alignment === 'left' ? spacing.base.lg : 0)};
    padding-left: ${({ alignment }) => (alignment === 'right' ? spacing.base.lg : spacing.base.sm)};
    justify-content: ${({ alignment }) => (alignment === 'right' ? 'center' : 'flex-start')};
    order: ${({ order }) => order};

    > svg,
    img {
      margin: 0 auto;
      justify-content: ${({ alignment }) => (alignment === 'right' ? 'center' : 'flex-start')};
      ${({ alignment }) => alignment === 'left' && `flex: 1;`};
    }
  }
`

export const StyledCtaRow = styled(Section)`
  flex-wrap: wrap;
  display: flex;
  max-width: 1250px;
  align-items: center;
  justify-content: space-around;
  padding: 0 ${spacing.base.sm};
  margin: 0;
`

export type CtaImageAlignment = 'right' | 'left'
export type ImageHeight = 'sm' | 'md' | 'lg'

export interface CTSImage {
  alt: string
  url: string
  mobile?: {
    url: string
  }
  tablet?: {
    url: string
  }
}

export interface CallToActionPanelProps {
  image?: CTSImage
  svg?: JSX.Element
  alignment: CtaImageAlignment
  withLQIP?: boolean
  asset?: AssetTileAsset
  element: ActionElement
  showMore?: ShowMoreProps
  isOpenAsset?: boolean
  showFeatured?: boolean
  showReadMore?: boolean
  onAssetClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void
  richTextCopy?: string | React.ReactNode
}

function getGraphCmsImageParams(imageUrl) {
  return imageUrl ? `${imageUrl}&blur=400&px=8` : undefined
}

export const CallToActionPanel: React.FC<CallToActionPanelProps> = ({
  children,
  image,
  svg,
  alignment,
  withLQIP = false,
  showReadMore = false,
  showFeatured = false,
  isOpenAsset = false,
  element,
  showMore,
  asset,
  onAssetClick,
  richTextCopy,
  ...props
}) => {
  return (
    <StyledCtaRow>
      <StyledCtaImageColumn alignment={alignment} order={alignment === 'right' ? 1 : -1}>
        {image || (image && asset) ? (
          <LazyLoadImage
            {...props}
            withLQIP={withLQIP}
            src={image.url}
            lowResSrc={getGraphCmsImageParams(image.url)}
            srcSm={image?.mobile?.url}
            lowResSrcSm={getGraphCmsImageParams(image?.mobile?.url)}
            srcMd={image?.tablet?.url}
            lowResSrcMd={getGraphCmsImageParams(image?.tablet?.url)}
            alt={image.alt}
            rounded
          />
        ) : asset ? (
          <StyledAssetTile>
            <AssetTile
              assetView="list"
              orientation="portrait"
              asset={asset}
              isOpenAsset={isOpenAsset}
              showFeatured={showFeatured}
              competencyLabel={asset?.competency}
              layout={AssetTileLayout.gridItem}
              onClick={onAssetClick}
            />
          </StyledAssetTile>
        ) : (
          svg
        )}
      </StyledCtaImageColumn>
      <StyledCtaTextColumn alignment={alignment}>
        <CallToActionElement
          showReadMore={showReadMore}
          showMore={showMore}
          element={element}
          richTextCopy={richTextCopy}
        />
        {children}
      </StyledCtaTextColumn>
    </StyledCtaRow>
  )
}
