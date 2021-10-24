import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'
import * as React from 'react'
import { FeatureList } from './FeatureList'

storiesOf('Design System/Molecules/FeatureList', module).add('Default', () => (
  <div style={{ width: '400px' }}>
    <FeatureList
      list={[
        { label: text('Provider', 'Provider'), value: 'Youtube' },
        { label: text('Primary competency', 'Primary competency'), value: 'Digital Marketing' },
        { label: text('Type', 'Type'), value: 'Article' },
        { label: text('Length', 'Length'), value: '16 minutes' },
      ]}
    />
  </div>
))
