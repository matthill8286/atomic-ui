import React from 'react'
import { Icon } from '@/components/Atoms/Icon'
import { CopyText } from '@/components/Atoms/Typography/CopyText'
import { IconCheckmarkCircle } from '@excelwithbusiness/webmobile-svg-library'
import { renderWithTheme } from '@/testRenderer'
import { Lists } from './Lists'

describe('Lists', () => {
  it('renders correctly', () => {
    const tree = renderWithTheme(
      <Lists>
        <li>
          <CopyText>Lorem ipsum</CopyText>
        </li>
      </Lists>
    )
    expect(tree).toMatchSnapshot()
  })
  it('renders correctly with icon', () => {
    const tree = renderWithTheme(
      <Lists>
        <li>
          <CopyText>
            <Icon color="success" height={24} width={24}>
              <IconCheckmarkCircle />
              Lorem ipsum
            </Icon>
          </CopyText>
        </li>
      </Lists>
    )
    expect(tree).toMatchSnapshot()
  })
})
