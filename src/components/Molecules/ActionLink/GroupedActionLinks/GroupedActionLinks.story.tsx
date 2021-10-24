import { select, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import React from 'react'
import { saiyanTheme } from '@/styles'
import { ThemeColors, ThemeFontSizes } from '@/types'
import { GroupedActionLinks, GroupedActionLinksProps } from './GroupedActionLinks'
import { actionLinks, actionToLinks } from './GroupedActionLinks.mocks'

const sizes: ThemeFontSizes[] = ['xxxs', 'xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl']

const knobs = () => ({
  fontSize: select('Font Size', sizes, sizes[3]),
  color: select('Color', Object.keys(saiyanTheme.color), 'grey4') as ThemeColors,
  padding: text('padding', 'lg sm'),
})

const Template = (args: GroupedActionLinksProps) => <GroupedActionLinks {...args} />

storiesOf('Design System/Molecules/Action Link', module)
  .add('Grouped Inline', () => <Template flexed={false} links={actionLinks} {...knobs()} />)
  .add('Grouped Inline with To', () => (
    <Template flexed={false} links={actionToLinks} {...knobs()} />
  ))
  .add('Grouped Flexed', () => <Template flexed dropdownFlexed links={actionLinks} {...knobs()} />)
