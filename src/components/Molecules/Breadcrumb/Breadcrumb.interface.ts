import { MarginProps, PaddingProps, ThemeColors } from '@/types/theme'

export interface BreadcrumbPath {
  name: string
  link: string
  isRouterLink?: boolean
}

export type BreadcrumbProps = {
  className?: string
  loading?: boolean
  homeLink?: string
  paths: BreadcrumbPath[]
  hideLastElement?: boolean
  isHomeRouterLink?: boolean
  homeValue?: string
  textColor?: ThemeColors
  iconColor?: ThemeColors
  linkColor?: ThemeColors
  decorationColor?: ThemeColors
} & MarginProps &
  PaddingProps

export interface StyledLiProps {
  isLastButOne: boolean
}

export type StyledBreadcrumbProps = {
  className?: string
  isLoading: boolean
} & MarginProps &
  PaddingProps
