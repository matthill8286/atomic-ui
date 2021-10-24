import React from 'react'
import { Icon } from '@/components/Atoms/Icon'
import { CopyText } from '@/components/Atoms/Typography'
import { styled } from '@/styles'
import { IconDone } from '@excelwithbusiness/webmobile-svg-library'

const StyledTickIcon = styled(Icon)`
  pointer-events: none;
  position: absolute;
  top: 14px;
  left: 22px;
`

export const StyledLanguageMenuOption = styled.div`
  ${({ theme }) => `
    display: block;
    position: relative;
    max-width: 100%;
    background: ${theme.color.white};
    padding: ${theme.spacing.base.sm} ${theme.spacing.base.sm} ${theme.spacing.base.sm} ${theme.spacing.base.xxxl};
    hyphens: auto;
    text-align: left;

    &:hover {
      cursor: pointer;
      background: ${theme.color.grey2};
      > div {
        color: ${theme.color.grey6};
      }
      }
  `}
`

export const LanguageMenuList = props => {
  const { onClick, languages, currentIndex } = props

  return languages.map((language, index) => {
    const active = index === currentIndex
    return (
      <StyledLanguageMenuOption onClick={() => onClick(index, language)} key={language.id}>
        {active && (
          <StyledTickIcon width={24} height={24} color="grey5">
            <IconDone />
          </StyledTickIcon>
        )}
        <CopyText tag="div" fontSize="xs" weight="regular" lineHeight="xs" color="grey5" margin="0">
          {language.label}
        </CopyText>
      </StyledLanguageMenuOption>
    )
  })
}

LanguageMenuList.displayName = 'LanguageMenuList'
