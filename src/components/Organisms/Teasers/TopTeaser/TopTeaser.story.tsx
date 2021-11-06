import React from 'react'
import { StorybookRouterWrapper } from '@/utils/StorybookWrapper'
import { storiesOf } from '@storybook/react'

import { number, text, select } from '@storybook/addon-knobs'
import { BadgeActionType } from '@/components/Atoms/Badge'
import { Illustration09 } from '@matthill8286/jsx-icon-library'
import { TopTeaser } from '@/components/Organisms/Teasers'

const badges = [
  { id: 0, name: 'New' },
  { id: 1, name: '100% Awesome!' },
]

const actionTypes: { [key: string]: BadgeActionType } = {
  prominent: 'prominent',
  secondary: 'secondary',
}

const colorTypes: {
  [key: string]: 'primary' | 'black' | 'white' | 'selected' | 'grey' | undefined
} = {
  primary: 'primary',
  selected: 'selected',
  white: 'white',
  black: 'black',
  grey: 'grey',
}

const knobs = () => {
  return {
    link: {
      to: text('Link To', '/'),
    },
    height: {
      mobile: number('mobile', 350),
      tablet: number('tablet', 300),
      desktop: number('desktop', 400),
    },
    badgeActionType: select('Badge Type', actionTypes, actionTypes[0]),
    color: select('Colors', colorTypes, colorTypes[0]),
    content: {
      primary: text('Headline', 'Welcome to'),
      secondary: text('Copy text', 'Digital Agility at saiyan'),
      name: text('Name', 'Matthew'),
    },
    heroImages: {
      lg: text(
        'large',
        `https://media.graphcms.com/resize=fit:crop,height:275,width:800/tbT0Znk2RJmb3d6RtCLm`
      ),
      md: text(
        'medium',
        'https://media.graphcms.com/resize=fit:crop,height:250,width:600/tbT0Znk2RJmb3d6RtCLm'
      ),
      sm: text(
        'small',
        'https://media.graphcms.com/resize=fit:crop,height:100,width:350/tbT0Znk2RJmb3d6RtCLm'
      ),
      xl: text(
        'XL',
        'https://media.graphcms.com/resize=fit:crop,height:300,width:1000/tbT0Znk2RJmb3d6RtCLm'
      ),
    },
  }
}

storiesOf('Design System/Organisms/Teasers/AssetTeaser', module)
  .add('Slim version With Feature Image & Heading', () => {
    return (
      <StorybookRouterWrapper>
        <TopTeaser {...knobs()} height={{ mobile: 100, tablet: 150, desktop: 150 }} />
      </StorybookRouterWrapper>
    )
  })
  .add('With Featured Content', () => {
    return (
      <StorybookRouterWrapper>
        <TopTeaser
          {...knobs()}
          content={{ ...knobs().content }}
          heroImages={{
            lg:
              'https://media.graphcms.com/resize=fit:crop,height:300,width:800/tbT0Znk2RJmb3d6RtCLm',
            md:
              'https://media.graphcms.com/resize=fit:crop,height:300,width:800/tbT0Znk2RJmb3d6RtCLm',
            sm:
              'https://media.graphcms.com/resize=fit:crop,height:300,width:800/tbT0Znk2RJmb3d6RtCLm',
            xl:
              'https://media.graphcms.com/resize=fit:crop,height:300,width:800/tbT0Znk2RJmb3d6RtCLm',
          }}
        />
      </StorybookRouterWrapper>
    )
  })
  .add('With Featured Images & Featured Content', () => {
    return (
      <StorybookRouterWrapper>
        <TopTeaser
          {...knobs()}
          heroImages={undefined}
          content={{ ...knobs().content }}
          images={{
            lg:
              'https://media.graphcms.com/resize=fit:crop,height:300,width:800/tbT0Znk2RJmb3d6RtCLm',
            md:
              'https://media.graphcms.com/resize=fit:crop,height:300,width:800/tbT0Znk2RJmb3d6RtCLm',
            sm:
              'https://media.graphcms.com/resize=fit:crop,height:300,width:800/tbT0Znk2RJmb3d6RtCLm',
            xl:
              'https://media.graphcms.com/resize=fit:crop,height:300,width:800/tbT0Znk2RJmb3d6RtCLm',
          }}
        />
      </StorybookRouterWrapper>
    )
  })
  .add('With Hero Banner Image and featured badges ', () => {
    return (
      <StorybookRouterWrapper>
        <TopTeaser
          {...knobs()}
          badges={badges}
          heroImages={{
            lg:
              'https://media.graphcms.com/resize=fit:crop,height:300,width:800/tbT0Znk2RJmb3d6RtCLm',
            md:
              'https://media.graphcms.com/resize=fit:crop,height:300,width:800/tbT0Znk2RJmb3d6RtCLm',
            sm:
              'https://media.graphcms.com/resize=fit:crop,height:300,width:800/tbT0Znk2RJmb3d6RtCLm',
            xl:
              'https://media.graphcms.com/resize=fit:crop,height:300,width:800/tbT0Znk2RJmb3d6RtCLm',
          }}
          content={{ ...knobs().content }}
          images={undefined}
        />
      </StorybookRouterWrapper>
    )
  })

  .add('With SVG, Featured Content and featured badges ', () => {
    return (
      <StorybookRouterWrapper>
        <TopTeaser
          {...knobs()}
          badges={badges}
          badgeActionType="prominent"
          heroImages={undefined}
          content={{ ...knobs().content }}
          svg={<Illustration09 />}
        />
      </StorybookRouterWrapper>
    )
  })
