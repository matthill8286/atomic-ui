import { withState } from '@dump247/storybook-state'
import { boolean, number, select, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import React from 'react'
import { GoalInput } from '@/components/Organisms/GoalInput/GoalInput'
import { GoalInputProps } from '@/components/Organisms/GoalInput/GoalInput.interface'
import { goalInputMocks } from '@/components/Organisms/GoalInput/__mocks__/goalInputs'

const stories = storiesOf('Design System/Organisms/GoalInput', module)

const initialState = goalInputMocks[0]

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
      withBubble: boolean('With Bubble', false),
      showMarks: boolean('Show Marks', false),
    })

    return (
      <GoalInput
        input={{
          proficiency: store.state.proficiency,
          id: 4,
          importance: store.state.importance,
          competencyName: 'Making the most of Microsoft Teams',
        }}
        leftInputLabel={'Beginner'}
        rightInputLabel={'Master'}
        onProficiencyChange={onProficiencyChange}
        onImportanceChange={onImportanceChange}
        {...knobs()}
        whereInputName={'where-input'}
        needInputName={'need-input'}
      />
    )
  })
)
