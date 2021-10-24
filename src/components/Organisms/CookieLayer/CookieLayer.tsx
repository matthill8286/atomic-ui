import * as React from 'react'
import { Button, ButtonProps } from '@/components/Atoms/Button'
import { Heading } from '@/components/Atoms/Typography'
import { CopyText } from '@/components/Atoms/Typography/CopyText'
import { Cell, Grid, Row } from '@/components/Helper/Grid'
import { css, styled } from '@/styles/styled'
import { useWindowDimensions } from '@/components/Helper'
import { breakpoints, media } from '@/styles'

const StyledCookieWrapper = styled.div<{ position: string }>`
  position: ${({ position }) => position};
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 200;
  box-sizing: border-box;

  & a {
    color: ${({ theme }) => theme.color.grey5};

    :hover {
      color: ${({ theme }) => theme.color.primary};
    }
  }
`

const StyledButton = styled(Button)`
  display: inline-flex;
  flex-flow: column;
  margin-right: ${({ theme }) => theme.spacing.base.md};

  ${media.maxSm} {
    margin: ${({ theme }) => theme.spacing.base.xs} 0;
  }
`

export type CookieButtonGroupAlignment = 'space-between' | 'right' | 'center'

export interface CookieButtonProps extends ButtonProps {
  onClick?: () => void
  buttonLabel?: string | React.ReactNode
  href?: string
}

export interface CookieButtonGroupProps {
  className?: string
  key?: string
  buttonAlignment?: CookieButtonGroupAlignment
  buttonWidth?: number
  primaryButtonProps?: CookieButtonProps
  secondaryButtonProps?: CookieButtonProps
  showButtonSeparator?: boolean
}

const StyledCookieFooter = styled.div<CookieButtonGroupProps>`
  ${({ showButtonSeparator, theme, buttonAlignment: buttonType }) => css`
    border-top: 1px solid ${showButtonSeparator ? theme.color.grey2 : `transparent`};
    padding-top: ${({ theme }) => theme.spacing.base.lg};
    width: 100%;
    display: flex;
    flex-direction: row;

    ${buttonType === 'space-between' &&
      `
      justify-content: space-between;
    `}

    ${buttonType === 'right' &&
      `
      justify-content: flex-end;
    `}

    ${buttonType === 'center' &&
      `
      justify-content: center;
      width: 100%;
      margin: 0 auto;
    `}

    ${media.maxSm} {
      flex-direction: column-reverse;
    }
  `}
`

const StyledCookieFooterPrimary = styled.div<CookieButtonGroupProps>`
  ${({ buttonAlignment: buttonType }) =>
    buttonType === 'space-between' &&
    `
    text-align: right;
    `}
  ${({ buttonAlignment: buttonType }) =>
    buttonType === 'right' &&
    `
    text-align: right;
    `}
    ${({ buttonAlignment: buttonType, buttonWidth, theme }) =>
      buttonType === 'center'
        ? `
      margin: 0 auto 0;
      width: ${typeof buttonWidth === 'number' ? `${buttonWidth}px ` : '100%'}
    `
        : `
      margin: 0 ${theme.spacing.base.md}
    `}
`
const StyledCookieFooterSecondary = styled.div<CookieButtonGroupProps>`
  ${({ theme, buttonAlignment: buttonType }) => css`
    ${buttonType === 'right' &&
      `
      margin-right: ${theme.spacing.base.md};
    `}

    ${
      buttonType === 'center'
        ? `
      margin: 0 ${theme.spacing.base.xs} 0 auto;
       width: 100%;
    `
        : `
      margin: 0 ${theme.spacing.base.md}
    `
    }

    ${media.maxSm} {
      margin-top: ${({ theme }) => theme.spacing.base.sm};
      margin-right: 0;
    }
  `}
`

const StyledCookieFooterButton = styled(Button)`
  width: 100%;
  margin: 0 auto;
  max-width: 400px;
  ${media.maxSm} {
    width: 100%;
  }
`

interface CookieLayerProps {
  position: string
  mainContent?: any
  buttonAlignment?: CookieButtonGroupAlignment
  buttonWidth?: number
  primaryButtonProps?: CookieButtonProps
  secondaryButtonProps?: CookieButtonProps
  showButtonSeparator?: boolean
}

export const CookieButtonGroup: React.FC<CookieButtonGroupProps> = ({
  buttonAlignment = 'space-between',
  primaryButtonProps,
  secondaryButtonProps,
  buttonWidth,
  showButtonSeparator = true,
}): JSX.Element => {
  if (!primaryButtonProps && !secondaryButtonProps) {
    return <React.Fragment />
  }

  const handleClick = (method?: () => void) => (ev?: React.MouseEvent) => {
    if (ev) ev.stopPropagation()
    if (method) method()
  }

  return (
    <StyledCookieFooter
      showButtonSeparator={showButtonSeparator}
      buttonAlignment={buttonAlignment}
      data-test="filtered-modal-footer-buttons">
      {secondaryButtonProps && (
        <StyledCookieFooterSecondary buttonAlignment={buttonAlignment}>
          <StyledCookieFooterButton
            actionType="secondary"
            data-test={'filtered-secondary-modal-footer-buttons'}
            onClick={
              secondaryButtonProps.onClick ? handleClick(secondaryButtonProps.onClick) : undefined
            }
            {...secondaryButtonProps}>
            {secondaryButtonProps.buttonLabel}
          </StyledCookieFooterButton>
        </StyledCookieFooterSecondary>
      )}
      {primaryButtonProps && (
        <StyledCookieFooterPrimary buttonAlignment={buttonAlignment} buttonWidth={buttonWidth}>
          <StyledCookieFooterButton
            actionType="primary"
            fullWidth={!!buttonWidth}
            data-test="filtered-primary-modal-footer-buttons"
            onClick={
              primaryButtonProps.onClick ? handleClick(primaryButtonProps.onClick) : undefined
            }
            {...primaryButtonProps}>
            {primaryButtonProps.buttonLabel}
          </StyledCookieFooterButton>
        </StyledCookieFooterPrimary>
      )}
    </StyledCookieFooter>
  )
}

export const CookieLayer: React.FC<CookieLayerProps> = ({
  position = 'fixed',
  mainContent,
  buttonAlignment = 'space-between',
  primaryButtonProps,
  secondaryButtonProps,
  showButtonSeparator,
  ...otherProps
}) => {
  const { breakpoint: currentBreakpoint } = useWindowDimensions()
  const isMobile = currentBreakpoint < breakpoints.sm

  return (
    <StyledCookieWrapper position={position} {...otherProps}>
      <Grid>
        <Row noMargin>
          <Cell columns={12}>
            {mainContent}
            <CookieButtonGroup
              primaryButtonProps={primaryButtonProps}
              secondaryButtonProps={secondaryButtonProps}
              buttonAlignment={buttonAlignment}
              showButtonSeparator={showButtonSeparator}
            />
          </Cell>
        </Row>
      </Grid>
    </StyledCookieWrapper>
  )
}
