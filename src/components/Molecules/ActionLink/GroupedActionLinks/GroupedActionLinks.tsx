import React, { useEffect, useRef } from 'react'
import { breakpoints, css, styled } from '@/styles'
import { useDropdownState, useWindowDimensions } from '@/components/Helper'
import { StyledDropdown } from '@/components/Molecules/DropdownButton'
import { PaddingMap, ThemeColors, ThemeFontSizes, VerticalPaddingMap } from '@/types'
import { ActionLink } from '../ActionLink'
import { QuickAction } from '../ActionLink.interface'
import { getActionLinkType } from '../helper'

export type GroupedActionLinksProps = {
  links: QuickAction[]
  fontSize: ThemeFontSizes
  color: ThemeColors
  flexed?: boolean
  padding?: PaddingMap
  dropdownFlexed?: boolean
}

const StyledWrapper = styled.div<{
  flexed: boolean
  padding?: string | VerticalPaddingMap | undefined
}>(
  ({ theme, flexed }) => css`
    list-style: none;
    display: ${flexed ? `flex` : `inline-flex`};
    margin-top: 0;
    margin-right: ${!flexed ? theme.spacing.base.sm : 0};

    :hover {
      cursor: pointer;
      ${flexed && `background: ${theme.color.grey2};`};
    }
  `
)

const StyleDropdownWrapper = styled.div`
  display: flex;
`

const StyledReference = styled.div`
  position: relative;
  display: flex;
  flex-grow: 1;

  > a {
    flex-grow: 1;
  }
`

export const GroupedActionLinks: ({
  links,
  fontSize,
  color,
  padding,
  flexed,
  dropdownFlexed,
  testIdSuffix,
}: {
  links: QuickAction[]
  fontSize: ThemeFontSizes
  color: ThemeColors
  padding?: PaddingMap
  flexed?: boolean
  dropdownFlexed?: boolean
  testIdSuffix?: string
}) => JSX.Element = ({
  links,
  fontSize,
  color,
  padding,
  flexed = false,
  testIdSuffix,
  dropdownFlexed,
}) => {
  const { element, toggleDropdown, showDropdown } = useDropdownState<HTMLDivElement>()
  const { breakpoint: currentBreakpoint } = useWindowDimensions()
  const isMobile = currentBreakpoint < breakpoints.md
  const ref = useRef<HTMLElement>(null)

  const onToggleDropdown = () => {
    toggleDropdown()
  }

  const handleMenuItemClick = item => {
    if (showDropdown) {
      toggleDropdown()
    }
  }

  const handleClickOutside = (event: Event): void => {
    if (!ref.current?.contains(event.target as Node) && showDropdown) {
      toggleDropdown()
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  })

  const ActionMenuContent = ({ navActionList }) => (
    <GroupedActionLinks
      flexed={dropdownFlexed}
      links={navActionList}
      fontSize="sm"
      color="grey5"
      key="GroupedActionLinks"
      padding={padding}
    />
  )

  return (
    <>
      {links.map((quickAction: QuickAction, index) => {
        const linkProp = getActionLinkType(quickAction)
        return (
          <StyledWrapper
            key={`Link-${index++}|${quickAction.id}`}
            padding={padding}
            flexed={flexed}>
            <StyledReference ref={element} data-test={`grouped-action-links-${testIdSuffix}`}>
              <ActionLink
                key={quickAction.id}
                inline={!flexed}
                color={color}
                fontSize={fontSize}
                branded={quickAction.branded}
                target={quickAction.target}
                onClick={quickAction?.links?.length ? onToggleDropdown : quickAction.onClick}
                {...(!quickAction?.links?.length ? linkProp : {})}>
                {quickAction.actionLabel}
              </ActionLink>
              {quickAction?.links?.length > 0 && (
                <StyleDropdownWrapper key={`InnerLink-${index++}|${quickAction.id}`}>
                  <StyledDropdown isMobile={isMobile} surface="white" showDropdown={showDropdown}>
                    <ActionMenuContent navActionList={quickAction.links} />
                  </StyledDropdown>
                </StyleDropdownWrapper>
              )}
            </StyledReference>
          </StyledWrapper>
        )
      })}
    </>
  )
}
