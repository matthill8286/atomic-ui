import { withState } from '@dump247/storybook-state'
import { text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import React from 'react'
import { ResponsiveGoalInput } from './index'
import { GoalInputProps } from '@/components/Organisms/GoalInput/GoalInput.interface'

const stories = storiesOf('Design System/Organisms/ResponsiveGoalInput', module)

stories.add(
  'Default',
  withState({ proficiency: 0.2, importance: 0.4 }, store => {
    const onProficiencyChange = event => {
      const {
        target: { value },
      } = event
      store.set({ proficiency: value })
    }

    const onImportanceChange = event => {
      const {
        target: { value },
      } = event
      store.set({ importance: value })
    }

    const knobs = (): Omit<GoalInputProps, 'input'> => ({
      headline: text('Headline', 'Making the most of Microsoft Teams'),
      whereInputLabel: text('Where Label', 'Where you are now:'),
      needInputLabel: text('Need Label', 'Where you need to be:'),
      whereInputName: text('Name for Where', 'where'),
      needInputName: text('name for Need', 'need'),
      leftInputLabel: text('Left input label', 'Beginner'),
      rightInputLabel: text('Right input label', 'Master'),
    })

    return (
      <ResponsiveGoalInput
        {...knobs()}
        input={{
          proficiency: store.state.proficiency,
          id: 4,
          importance: store.state.importance,
          competencyName: 'Making the most of Microsoft Teams',
        }}
        onProficiencyChange={onProficiencyChange}
        onImportanceChange={onImportanceChange}
        isOpenInitially={false}
      />
    )
  })
)
