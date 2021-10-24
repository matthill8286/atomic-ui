/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck => JSX property style does not exists in Typo component
import * as React from 'react'
import { withState } from '@dump247/storybook-state'
import { storiesOf } from '@storybook/react'
import { ButtonGroup } from './ButtonGroup'
import { Button } from '@/components/Atoms/Button'
import { styled } from '@/styles/styled'

const stories = storiesOf('Design System/Molecules/ButtonGroup', module)

const voidFn = () => {}
const StyledDivWithTopBorder = styled.div`
  padding-top: 25px;
  position: relative;
  background-color: #fff;
  border-top: 1px solid #000;

  &:after,
  &:before {
    top: -1px;
    left: 7px;
    border: solid transparent;
    content: '';
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
  }

  &:after {
    border-color: rgba(136, 183, 213, 0);
    border-top-color: #fff;
    border-width: 8px;
    margin-left: -8px;
  }
  &:before {
    border-color: rgba(194, 225, 245, 0);
    border-top-color: #000;
    border-width: 9px;
    margin-left: -9px;
  }
`

stories.add(
  'With 2 Buttons',
  withState({ value: '1' }, store => {
    return (
      <div style={{ padding: '20px' }}>
        <ButtonGroup>
          <Button actionType="outlined" onClick={voidFn} size="sm" type="button">
            Button 1
          </Button>
          <Button actionType="outlined" onClick={voidFn} size="sm" type="button">
            Button 2
          </Button>
        </ButtonGroup>
      </div>
    )
  })
)

stories.add(
  'With 3 Buttons',
  withState({ value: '1' }, store => {
    return (
      <div style={{ padding: '20px' }}>
        <ButtonGroup>
          <Button actionType="outlined" onClick={voidFn} size="sm" type="button">
            Button 1
          </Button>
          <Button actionType="outlined" onClick={voidFn} size="sm" type="button">
            Button 2
          </Button>
          <Button actionType="outlined" onClick={voidFn} size="sm" type="button">
            Button 3
          </Button>
        </ButtonGroup>
        <br />
        <ButtonGroup>
          <Button actionType="secondary" onClick={voidFn} size="sm" type="button">
            Button 1
          </Button>
          <Button actionType="secondary" onClick={voidFn} size="sm" type="button">
            Button 2
          </Button>
          <Button actionType="secondary" onClick={voidFn} size="sm" type="button">
            Button 3
          </Button>
        </ButtonGroup>
        <br />
        <ButtonGroup>
          <Button actionType="prominent" onClick={voidFn} size="sm" type="button">
            Button 1
          </Button>
          <Button actionType="prominent" onClick={voidFn} size="sm" type="button">
            Button 2
          </Button>
          <Button actionType="prominent" onClick={voidFn} size="sm" type="button">
            Button 3
          </Button>
        </ButtonGroup>
      </div>
    )
  })
)
