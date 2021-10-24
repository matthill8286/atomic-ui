import { Typo } from '@/components/Atoms/Typography'
import { media, spacing } from '@/styles'
import { css, styled } from '@/styles'
import { ThemeColors } from '@/types'

export const StyledHeroFeatureCopy = styled(Typo)(({ theme }) => {
  const { copy } = theme.hero

  return css`
    line-height: ${copy.font.height};
    font-weight: ${copy.font.weight};
    inline-size: fit-content;

    ${media.maxMd} {
      line-height: 30px;
    }
  `
})

export const StyledHeroFeatureIntro = styled(Typo)(({ theme }) => {
  const { intro } = theme.hero
  const { spacing } = theme
  return css`
    padding: ${spacing.base.sm};
    width: max-content;
    line-height: ${intro.font.height};
    font-weight: ${intro.font.weight};
    text-transform: ${intro.textTransform};
  `
})

export const StyledText = styled.div`
  position: relative;
  flex-basis: 100%;
  flex-wrap: wrap;
  padding: 0;
  margin-top: ${spacing.base.sm};

  ${media.md} {
    flex-basis: calc(50% - 2 * ${spacing.base.md});
    padding: 0 ${spacing.base.sm};
    margin-top: 0;
  }
`

export const StyledHeroContentContainer = styled.div`
  display: flex;
  flex-basis: 100%;
  flex-direction: row;
  padding: ${({ theme }) => theme.spacing.base.md};
  margin: 0;
  justify-content: flex-end;
`

export const StyledHeroFeatureSection = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: 50%;
    left: 20%;
    width: 65%;
    padding: ${theme.spacing.base.xs};
    text-align: center;
    transform: translate(-20%, -50%);

    ${media.maxMd} {
      width: 95%;
    }
  `}
`

export const StyledFeatureImage = styled.div`
  order: unset;
  display: flex;
  padding: 0 ${spacing.base.sm};
  justify-content: center;

  ${media.md} {
    flex-basis: calc(50% - 2 * ${spacing.base.md});
  }
`

export const StyledRow = styled.div<{ color?: ThemeColors; image?: string }>`
  flex-wrap: wrap;
  display: flex;
  margin: 0;
  padding: 0;
  align-items: center;
  justify-content: space-around;
  min-height: 300px;
  background-image: ${({ image }) => image && `url(${image})`};
  background-size: 100% 100%;
  background-color: ${({ theme, color }) => (color ? theme.color[color] : theme.color['white'])};
`

export const StyledSection = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: 50%;
    left: 25%;
    width: fit-content;
    padding: ${theme.spacing.base.xs};
    text-align: center;
    transform: translate(-25%, -50%);

    ${media.maxMd} {
      top: 0;
      position: relative;
      left: 0;
      transform: translate(0, 0);
    }
  `}
`

export const StyledIconContainer = styled.div`
  max-width: 100%;
  height: auto;
  justify-content: center;
  display: flex;

  > svg {
    height: auto;
  }
`

export const StyledHeroContainer = styled.div`
  display: flex;
  flex-basis: 100%;
  flex-direction: row;
  padding: ${({ theme }) => theme.spacing.base.md};
  margin: 0;

  ${media.maxMd} {
    flex-direction: column;
  }
`
