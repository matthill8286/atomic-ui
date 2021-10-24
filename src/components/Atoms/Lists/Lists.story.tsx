import { array, boolean } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { Icon } from '@/components/Atoms/Icon'
import { CopyText } from '@/components/Atoms/Typography/CopyText'
import { IconCheckmarkCircle } from '@excelwithbusiness/webmobile-svg-library'
import { Lists } from './Lists'

storiesOf('Design System/Atoms/Lists', module).add('Lists', () => {
  const ListItems = array('List items', [
    'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ',
    'Dolore est',
    'Testing this',
  ])
  const icon = boolean('Icon', false)
  const ordered = boolean('Ordered', false)
  const margin = boolean('With Margin', false)

  return (
    <Lists icon={icon} ordered={ordered} withMargin={margin}>
      {ListItems.map((item, index) => (
        <li key={index}>
          {icon && (
            <Icon color={'grey4'} width={24} height={24}>
              <IconCheckmarkCircle />
            </Icon>
          )}
          {<CopyText>{item}</CopyText>}
        </li>
      ))}
    </Lists>
  )
})
