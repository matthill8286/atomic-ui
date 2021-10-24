import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import React from 'react'
import { ActionLink } from './ActionLink'
import { ActionLinkProps } from './ActionLink.interface'

const actionLinkChildren = 'Action link'
const Template = (args: ActionLinkProps) => <ActionLink {...args} />

storiesOf('Design System/Molecules/Action Link', module).add('Single', () => (
  <Template>{actionLinkChildren}</Template>
))

storiesOf('Design System/Molecules/Action Link', module).add('On Click', () => (
  <Template onClick={action('Action Link clicked')}>{actionLinkChildren}</Template>
))
