import { boolean, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { Breadcrumb } from './Breadcrumb'
import { BreadcrumbPath } from '@/components/Molecules/Breadcrumb/Breadcrumb.interface'

const paths: BreadcrumbPath[] = [
  {
    name: 'Dashboard',
    link: '/dashboard',
    isRouterLink: true,
  },
  {
    name: 'Learning Asset',
    link: '/learning-asset/3215',
    isRouterLink: true,
  },
  {
    name: 'Learning Asset: Watch about Genomes',
    link: '/learning-asset/3215-watch-about-genomes',
    isRouterLink: true,
  },
]

const knobs = () => ({
  margin: text('margin', 'lg sm'),
  padding: text('padding', 'lg sm'),
})

storiesOf('Design System/Molecules/Breadcrumb', module)
  .add('Default', () => (
    <Breadcrumb {...knobs()} paths={paths} hideLastElement={boolean('Hide Last Element', false)} />
  ))
  .add('Default as Skeleton', () => <Breadcrumb loading paths={[]} />)
