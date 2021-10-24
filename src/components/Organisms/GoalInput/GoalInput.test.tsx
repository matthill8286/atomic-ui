import React from 'react'
import { mountWithTheme, renderWithTheme } from '@/testRenderer'
import { GoalInput } from '@/components/Organisms/GoalInput/GoalInput'
import { goalInputMocks } from '@/components/Organisms/GoalInput/__mocks__/goalInputs'

describe('GoalInput', () => {
  it('should render', () => {
    const onChange = jest.fn()
    const wrapper = renderWithTheme(
      <GoalInput
        whereInputName={'test-goal'}
        needInputName={'test-need'}
        needInputLabel={'Where do you need to be:'}
        headline={'Can I manage you as well as I should?'}
        whereInputLabel={'Where are you now:'}
        input={goalInputMocks[0]}
        onProficiencyChange={onChange}
        onImportanceChange={onChange}
      />
    )
    expect(wrapper).toMatchSnapshot()
  })
  it('should fire change event', () => {
    const onChange = jest.fn()
    const wrapper = mountWithTheme(
      <GoalInput
        whereInputName={'where-input'}
        needInputName={'need-input'}
        needInputLabel={'Where do you need to be:'}
        headline={'Can I manage you as well as I should?'}
        whereInputLabel={'Where are you now:'}
        input={goalInputMocks[0]}
        onProficiencyChange={onChange}
        onImportanceChange={onChange}
      />
    )
    const needInput = wrapper.find('input[name*="need-input"]')
    const whereInput = wrapper.find('input[name*="where-input"]')

    needInput.simulate('change')
    expect(onChange).toBeCalledTimes(1)

    whereInput.simulate('change')
    expect(onChange).toBeCalledTimes(2)
  })
})
