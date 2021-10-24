import React from 'react'
import { renderWithTheme } from '@/testRenderer'
import { LanguageMenu } from './LanguageMenu'
import { languageMockItems } from './LanguageMenu.mock'

describe('LanguageMenu', () => {
  const extendedLanguageHandler = () => jest.fn()

  it('should render with languages', () => {
    const wrapper = renderWithTheme(
      <LanguageMenu
        extendedLanguageHandler={extendedLanguageHandler}
        languages={languageMockItems}
        setupCurrentIndex={0}
      />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('should render testIdSuffix', () => {
    const tree = renderWithTheme(
      <LanguageMenu
        testIdSuffix="language"
        extendedLanguageHandler={extendedLanguageHandler}
        languages={languageMockItems}
        setupCurrentIndex={0}
      />
    )
    expect(tree).toMatchSnapshot()
  })

  it('should render with className', () => {
    const tree = renderWithTheme(
      <LanguageMenu
        className="selected"
        extendedLanguageHandler={extendedLanguageHandler}
        languages={languageMockItems}
        setupCurrentIndex={0}
      />
    )
    expect(tree).toMatchSnapshot()
  })
})
