import React, { useState } from 'react'
import { InputRange } from '@/components/Molecules/InputRange'
import { breakpoints, css, media, styled } from '@/styles'
import { Heading, Typo } from '@/components/Atoms/Typography'
import { useWindowDimensions } from '@/components/Helper/useWindowDimensions'
import { GoalInputProps } from '@/components/Organisms/GoalInput/GoalInput.interface'

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  margin: 0 auto;
`
const RangeContainer = styled.div`
  display: inline-flex;
  flex: 1;
`

const StyledInputRange = styled(InputRange)`
  display: flex;
  flex-grow: 1;
`

const StyledTypo = styled(Typo)`
  align-self: center;
  height: 100%;
`

const InformationContainer = styled.div``

export const GoalInput: React.FC<GoalInputProps> = ({
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
  withBubble = false,
  showMarks = false,
}) => {
  const { breakpoint: currentBreakpoint } = useWindowDimensions()
  const isMobile = currentBreakpoint < breakpoints.lg
  return (
    <InputContainer>
      <InformationContainer>
        {!isMobile && (
          <Heading scale={'level-4'} margin={'xs 0'} bold>
            {headline}
          </Heading>
        )}
        <Typo tag={'div'} color={'grey4'} fontSize={'sm'} padding={'xs 0'}>
          {whereInputLabel}
        </Typo>
      </InformationContainer>
      <RangeContainer>
        <StyledTypo tag={'div'} display={'flex'} color={'grey4'}>
          {leftInputLabel}
        </StyledTypo>
        <StyledInputRange
          min={0}
          max={1}
          step={0.1}
          markAmount={1}
          name={whereInputName}
          onChange={onProficiencyChange}
          value={input.proficiency}
          showMarks={showMarks}
          withBubble={withBubble}
        />
        <StyledTypo tag={'div'} display={'flex'} color={'grey4'}>
          {rightInputLabel}
        </StyledTypo>
      </RangeContainer>
      <InformationContainer>
        <Typo tag={'div'} color={'grey4'} fontSize={'sm'} padding={'xs 0'}>
          {needInputLabel}
        </Typo>
      </InformationContainer>
      <RangeContainer>
        <StyledTypo tag={'span'} display={'flex'} color={'grey4'}>
          {leftInputLabel}
        </StyledTypo>
        <StyledInputRange
          min={0}
          max={1}
          step={0.1}
          markAmount={1}
          name={needInputName}
          onChange={onImportanceChange}
          value={input.importance}
          showMarks={showMarks}
          withBubble={withBubble}
        />
        <StyledTypo tag={'span'} display={'flex'} color={'grey4'}>
          {rightInputLabel}
        </StyledTypo>
      </RangeContainer>
    </InputContainer>
  )
}
