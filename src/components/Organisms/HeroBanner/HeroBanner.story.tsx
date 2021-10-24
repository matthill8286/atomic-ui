import { text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import React from 'react'
import { Heading } from '@/components/Atoms/Typography'
import { StorybookRouterWrapper } from '@/utils/StorybookWrapper'
import { HeroBanner } from './HeroBanner'

const badges = [
  { id: 0, name: 'New' },
  { id: 1, name: '100% Awesome!' },
]

const knobs = () => {
  return {
    link: {
      to: text('Link To', '#'),
    },
    height: {
      mobile: 350,
      tablet: 300,
      desktop: 400,
    },
    heroImages: {
      lg: 'https://media.graphcms.com/resize=fit:crop,height:300,width:800/tbT0Znk2RJmb3d6RtCLm',
      md: 'https://media.graphcms.com/resize=fit:crop,height:300,width:800/tbT0Znk2RJmb3d6RtCLm',
      sm: 'https://media.graphcms.com/resize=fit:crop,height:300,width:800/tbT0Znk2RJmb3d6RtCLm',
      xl: 'https://media.graphcms.com/resize=fit:crop,height:300,width:800/tbT0Znk2RJmb3d6RtCLm',
    },
  }
}

storiesOf('Design System/Organisms/HeroBanner', module)
  .add('Default', () => {
    return (
      <StorybookRouterWrapper>
        <div
          style={{
            width: '100%',
            display: 'flex',
          }}>
          <HeroBanner key={'ImageTile_' + knobs().height} {...knobs()} />
        </div>
      </StorybookRouterWrapper>
    )
  })
  .add('With promoted badged', () => {
    return (
      <StorybookRouterWrapper>
        <div
          style={{
            width: '100%',
            display: 'flex',
          }}>
          <HeroBanner key={'ImageTile_' + knobs().height} {...knobs()} badges={badges} />
        </div>
      </StorybookRouterWrapper>
    )
  })
  .add('Slim version With Feature Hero Image & Heading', () => {
    return (
      <StorybookRouterWrapper>
        <HeroBanner
          {...knobs()}
          height={{ mobile: 100, tablet: 125, desktop: 150 }}
          heroImages={{
            lg:
              'https://media.graphcms.com/resize=fit:crop,height:300,width:800/tbT0Znk2RJmb3d6RtCLm',
            md:
              'https://media.graphcms.com/resize=fit:crop,height:300,width:800/tbT0Znk2RJmb3d6RtCLm',
            sm:
              'https://media.graphcms.com/resize=fit:crop,height:300,width:800/tbT0Znk2RJmb3d6RtCLm',
            xl:
              'https://media.graphcms.com/resize=fit:crop,height:300,width:800/tbT0Znk2RJmb3d6RtCLm',
          }}>
          <Heading scale="level-3" padding="md" textAlign={'center'} margin={'auto'}>
            What we can offer our professionals
          </Heading>
        </HeroBanner>
      </StorybookRouterWrapper>
    )
  })
