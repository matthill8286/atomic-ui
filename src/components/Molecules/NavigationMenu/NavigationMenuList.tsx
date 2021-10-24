import React, { FC, MouseEvent } from 'react'
import {
  ActionLink,
  ActionLinkProps,
  GroupedActionLinks,
  GroupedActionLinksProps,
  QuickAction,
} from '@/components/Molecules/ActionLink'
import { styled } from '@/styles'
import { PaddingProps } from '@/types'

export type NavigationButtonType = {
  href?: string
  actionLabel?: string | undefined
  onClick?: (e: MouseEvent<HTMLElement>) => void
}

export type NavigationMenuListProps = {
  navActionList: QuickAction[]
  onClick: (e: MouseEvent<HTMLElement>) => void
  actionButton?: NavigationButtonType
  flexed?: boolean
} & PaddingProps

export const StyledNavigationMenuOption = styled(GroupedActionLinks)<GroupedActionLinksProps>`
  ${({ theme }) => `
    display: flex;
    width: 100%;

    :hover {
      > a + span {
        color: ${theme.color.grey6};
      }
    }
  `}
`

export const StyledActionLink = styled(ActionLink)<ActionLinkProps>`
  ${({ theme }) => `
    display: flex;
    width: 100%;
    color: ${theme.color.grey6};
    border-top: 1px solid ${theme.color.grey2};

    :hover {
      cursor: pointer;
      background: ${theme.color.grey2};
    }
`}
`

export const NavigationMenuList: FC<NavigationMenuListProps> = props => {
  const { navActionList, onClick, actionButton, flexed, padding } = props
  if (!navActionList?.length && !actionButton) return null

  return (
    <div onClick={onClick}>
      <StyledNavigationMenuOption
        flexed={flexed}
        links={navActionList}
        fontSize="sm"
        color="grey5"
        padding={padding}
      />
      {actionButton?.actionLabel && (
        <StyledActionLink
          color="grey5"
          onClick={actionButton?.onClick || undefined}
          href={actionButton.href}
          target="_self">
          {actionButton?.actionLabel}
        </StyledActionLink>
      )}
    </div>
  )
}
