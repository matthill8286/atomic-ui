import React, { FC } from 'react'
import { Icon, Link, LinkProps } from '../../../'
import { ActionLinkProps } from './ActionLink.interface'
import { OtherArrow } from "@matthill8286/atomic-icon-library";

export const ActionLink: FC<ActionLinkProps> = ({ children, bold = true, ...baseLinkProps }) => {
  const linkProps: LinkProps = {
    ...baseLinkProps,
    iconLeft: (
      <Icon color="primary">
        <OtherArrow />
      </Icon>
    ),
    scale: 'large',
    bold,
  }

  return <Link {...linkProps}>{children}</Link>
}

export type { QuickAction } from './ActionLink.interface'
export { GroupedActionLinks } from './GroupedActionLinks'

