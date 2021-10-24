import React from 'react'
import { renderWithTheme } from '@/testRenderer'
import { ResponsiveGoalInput } from './index'
import { goalInputMocks } from '@/components/Organisms/GoalInput/__mocks__/goalInputs'

const onChange = jest.fn()

describe('GoalSlider', () => {
  it('should render', () => {
    const wrapper = renderWithTheme(
      <ResponsiveGoalInput
        whereInputName={'test-goal'}
        needInputName={'test-need'}
        needInputLabel={'Where do you need to be:'}
        headline={'Can I manage you as well as I should?'}
        whereInputLabel={'Where are you now:'}
        input={goalInputMocks[0]}
        onProficiencyChange={onChange}
        onImportanceChange={onChange}
        isOpenInitially={false}
      />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
