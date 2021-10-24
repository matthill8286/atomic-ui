import { storiesOf } from '@storybook/react'
import React from 'react'
import Readme from '../README.md'
import ScRules from '../SCRULES.md'

storiesOf('Design System/Introduction', module)
  .add(
    'Readme',
    () => {
      return <div></div>
    },
    {
      info: Readme,
    }
  )
  .add(
    'SC Rules',
    () => {
      return <div></div>
    },
    {
      info: ScRules,
    }
  )
