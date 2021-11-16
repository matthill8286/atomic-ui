import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import { GroupedActionLinks, GroupedActionLinksProps } from './'
import { actionLinks } from './GroupedActionLinks.mocks'

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Design System/Molecules/Action Link/Grouped',
  component: GroupedActionLinks,
  args: { links: actionLinks },
} as Meta

const Template: Story<GroupedActionLinksProps> = (args: GroupedActionLinksProps) => (
  <GroupedActionLinks {...args} />
)

export const Default = Template.bind({})
