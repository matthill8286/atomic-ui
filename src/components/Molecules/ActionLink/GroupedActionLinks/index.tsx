import React, { FC } from 'react'
import { QuickAction } from '../ActionLink.interface'
import { getActionLinkType } from '../helper'
import { ActionLink } from '../'

export interface GroupedActionLinksProps {
  links: QuickAction[]
}

export const GroupedActionLinks: FC<GroupedActionLinksProps> = ({ links }) => {
  return (
    <>
      {links.map((quickAction, index) => {
        const linkProp = getActionLinkType(quickAction)
        return (
          <ActionLink
            key={index}
            target={quickAction.target}
            onClick={quickAction.onClick}
            {...linkProp}>
            {quickAction.actionLabel}
          </ActionLink>
        )
      })}
    </>
  )
}
