import * as React from 'react'
import { Accordion } from '@/components/Molecules/Accordion'
import { MediaStyleSwitch } from '@/components/Helper/MediaStyleSwitch'
import { GoalInput } from '@/components/Organisms/GoalInput/GoalInput'
import { GoalInputProps } from '@/components/Organisms/GoalInput/GoalInput.interface'
import { StyleguideArrow } from '@matthill8286/atomic-icon-library'

export const ResponsiveGoalInput: React.FC<GoalInputProps> = ({
  headline,
  whereInputLabel,
  needInputLabel,
  leftInputLabel,
  rightInputLabel,
  input,
  onProficiencyChange,
  onImportanceChange,
  whereInputName,
  needInputName,
  withBubble,
  showMarks,
  isOpenInitially = false,
}): JSX.Element | null => {
  const goalInputOptions = [
    {
      title: headline,
      id: input.id.toString(),
      details: (
        <GoalInput
          input={input}
          headline={headline}
          whereInputLabel={whereInputLabel}
          needInputLabel={needInputLabel}
          leftInputLabel={leftInputLabel}
          rightInputLabel={rightInputLabel}
          onProficiencyChange={onProficiencyChange}
          onImportanceChange={onImportanceChange}
          whereInputName={whereInputName}
          needInputName={needInputName}
          withBubble={withBubble}
          showMarks={showMarks}
        />
      ),
      isOpenInitially,
      noBorderTop: true,
    },
  ]
  if (!input) {
    return null
  }
  return (
    <>
      <MediaStyleSwitch query="lg" activeDisplay="block" inactiveDisplay="none">
        <GoalInput
          input={input}
          headline={headline}
          whereInputLabel={whereInputLabel}
          needInputLabel={needInputLabel}
          leftInputLabel={leftInputLabel}
          rightInputLabel={rightInputLabel}
          onProficiencyChange={onProficiencyChange}
          onImportanceChange={onImportanceChange}
          whereInputName={whereInputName}
          needInputName={needInputName}
          withBubble={withBubble}
          showMarks={showMarks}
        />
      </MediaStyleSwitch>
      <MediaStyleSwitch query="maxLg" activeDisplay="block" inactiveDisplay="none">
        <Accordion
          entries={goalInputOptions}
          isLarge={false}
          withIconsOnRight
          withCustomIcon
          customIcon={<StyleguideArrow />}
        />
      </MediaStyleSwitch>
    </>
  )
}
