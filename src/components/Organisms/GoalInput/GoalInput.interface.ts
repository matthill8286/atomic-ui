import React from 'react'

export type GoalDataProp = {
  id: number
  proficiency: number
  importance: number
  competencyName: string
}

export interface GoalInputProps {
  headline: string
  whereInputLabel: string
  needInputLabel: string
  whereInputName?: string
  needInputName?: string
  input: GoalDataProp
  rightInputLabel?: string
  leftInputLabel?: string
  withBubble?: boolean
  showMarks?: boolean
  isOpenInitially?: boolean
  onProficiencyChange?: React.ChangeEventHandler<HTMLInputElement>
  onImportanceChange?: React.ChangeEventHandler<HTMLInputElement>
}
