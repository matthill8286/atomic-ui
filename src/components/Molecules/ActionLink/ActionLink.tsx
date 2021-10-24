import React, { FC } from 'react'
import { Link, LinkProps } from '@/components/Atoms/Link'
import { ActionLinkProps } from './ActionLink.interface'

export const ActionLink: FC<ActionLinkProps> = ({
  children,
  bold = false,
  iconLeft,
  ...baseLinkProps
}) => {
  const linkProps: LinkProps = {
    ...baseLinkProps,
    iconLeft,
    underline: false,
    scale: 'large',
    bold,
    isGrouped: true,
  }

  return <Link {...linkProps}>{children}</Link>
}
