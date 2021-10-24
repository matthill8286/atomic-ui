import React from 'react'
import { renderWithThemeAndRouter } from '@/testRenderer'
import { navigationMockItems } from './navigation.mock'
import { NavigationMenu } from './NavigationMenu'

describe('NavigationMenu', () => {
  it('should render with items', () => {
    const wrapper = renderWithThemeAndRouter(
      <NavigationMenu
        extendedNavigationHandler={() => jest.fn()}
        navActionList={navigationMockItems}
        testIdSuffix="data-test-menu"
        initialLink={undefined}
        iconAsMainUi
        button={{ actionLabel: 'Log Out', onClick: () => jest.fn(), href: '/letuslogout' }}
      />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('should render with text for the main actiuon', () => {
    const wrapper = renderWithThemeAndRouter(
      <NavigationMenu
        extendedNavigationHandler={() => jest.fn()}
        navActionList={navigationMockItems}
        testIdSuffix="data-test-menu"
        initialLink="Events"
        iconAsMainUi={false}
        button={{ actionLabel: 'Log Out', onClick: () => jest.fn(), href: '/letuslogout' }}
      />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
