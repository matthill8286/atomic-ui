import { boolean, color, number, radios, select, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import React from 'react'
import { Illustration01, Illustration02, Illustration03 } from '@matthill8286/jsx-icon-library'
import { CallToActionPanel, CallToActionPanelProps } from './CallToActionPanel'
import { newAssetMocks } from '@/components/Organisms/AssetTile/elements/mockAsset'

const imageUrls = {
  normal: 'https://media.graphcms.com/resize=fit:crop,height:280,width:450/tbT0Znk2RJmb3d6RtCLm',
  small: 'https://media.graphcms.com/resize=fit:crop,height:150,width:300/tbT0Znk2RJmb3d6RtCLm',
  big: 'https://media.graphcms.com/resize=fit:crop,height:300,width:600/tbT0Znk2RJmb3d6RtCLm',
}

const CustomIcon = {
  Achievement: 'achievement',
  Analytics: 'analytics',
  Analyzing: 'analyzing',
}

const svgs = {
  achievement: <Illustration03 style={{ display: 'flex' }} />,
  analytics: <Illustration01 style={{ display: 'flex' }} />,
  analyzing: <Illustration02 style={{ display: 'flex' }} />,
}

const defaultKnobs = (): CallToActionPanelProps & { svgName: string } => {
  const svgName = select('icon', CustomIcon, CustomIcon.Achievement)
  const showReadMore = boolean('Show Read More', true)
  const svg = svgs[svgName]

  return {
    svgName,
    svg,
    showReadMore,
    showMore: {
      lineHeight: 18,
      numOfLines: 5,
      showMoreText: 'Show More',
      showLessText: 'Show Less',
      labelAlignment: 'flex-end',
    },
    element: {
      headline: text('Headline', 'What we offer health care professionals'),
      buttonLabel: text('Button label', 'Clicking'),
    },
    richTextCopy: text(
      'Copy text',
      'The European Society for Paediatric Gastroenterology Hepatology and Nutrition (ESPGHAN) is a multi-professional organisation whose aim is to promote the health of children with special attention to the gastrointestinal tract, liver and nutritional status, through knowledge creation, the dissemination of science based information, the promotion of best practice in the delivery of care and the provision of high quality education for paediatric gastroenterology, hepatology and nutrition professionals in Europe and beyond.'
    ),
    asset: newAssetMocks[0],
    alignment: select('Alignment', ['right', 'left'], 'left'),
  }
}

const image = {
  alt: 'this is the alt text',
  url: imageUrls.normal,
  mobileSmall: {
    url: imageUrls.small,
  },
  mobileBig: {
    url: imageUrls.big,
  },
}

storiesOf('Design System/Organisms/CallToActionPanel', module)
  .add('Default Image', () => {
    return <CallToActionPanel {...defaultKnobs()} image={image} />
  })
  .add('Default Icon', () => {
    return <CallToActionPanel {...defaultKnobs()} />
  })
  .add('With Asset', () => {
    return <CallToActionPanel showFeatured svg={undefined} image={undefined} {...defaultKnobs()} />
  })
  .add('2 alternate rows', () => {
    return (
      <>
        <CallToActionPanel {...defaultKnobs()} alignment="right" image={image} />
        <CallToActionPanel {...defaultKnobs()} alignment="left" image={image} />
      </>
    )
  })
  .add('passing element', () => {
    return (
      <>
        <CallToActionPanel
          {...defaultKnobs()}
          alignment="right"
          image={image}
          richTextCopy={
            <p>
              testing <b>this</b>
            </p>
          }
        />
      </>
    )
  })
