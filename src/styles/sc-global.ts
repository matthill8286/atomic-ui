import { createGlobalStyle } from 'styled-components'

import EurostileWoff from '../../public/fonts/EurostileNextLTPro-Bold.woff'
import EurostileWoff2 from '../../public/fonts/EurostileNextLTPro-Bold.woff2'

import SSPBoldWoff from '../../public/fonts/SourceSansPro-Bold.woff'
import SSPBoldWoff2 from '../../public/fonts/SourceSansPro-Bold.woff2'
import SSPRegularWoff from '../../public/fonts/SourceSansPro-Regular.woff'
import SSPRegularWoff2 from '../../public/fonts/SourceSansPro-Regular.woff2'
import SSPSemiboldWoff from '../../public/fonts/SourceSansPro-Semibold.woff'
import SSPSemiboldWoff2 from '../../public/fonts/SourceSansPro-Semibold.woff2'

// Featured
import OswaldBold from '../../public/fonts/Oswald-Bold.ttf'
import OswaldRegular from '../../public/fonts/Oswald-Regular.ttf'
import OswaldLight from '../../public/fonts/Oswald-Light.ttf'

import { normalize } from './normalize'

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  /* Regular - 400 */
  @font-face {
    font-family: SourceSansPro;
    font-weight: 400;
    font-style: normal;
    font-display: swap;
    src:
      url(${SSPRegularWoff2}) format('woff2'),
      url(${SSPRegularWoff}) format('woff');
  }

  /* Semibold - 600 */
  @font-face {
    font-family: SourceSansPro;
    font-weight: 600;
    font-style: normal;
    font-display: swap;
    src:
      url(${SSPSemiboldWoff2}) format('woff2'),
      url(${SSPSemiboldWoff}) format('woff');
  }

  /* Bold - 700 */
  @font-face {
    font-family: SourceSansPro;
    font-weight: 700;
    font-style: normal;
    font-display: swap;
    src:
      url(${SSPBoldWoff2}) format('woff2'),
      url(${SSPBoldWoff}) format('woff');
  }

  @font-face {
    font-family: FeaturedHeadline;
    font-weight: 400;
    font-style: normal;
    font-display: swap;
    src:
      url(${EurostileWoff2}) format('woff2'),
      url(${EurostileWoff}) format('woff');
  }

  @font-face {
    font-family: Oswald;
    font-weight: 300;
    font-style: normal;
    font-display: swap;
    src:
      url(${OswaldLight}) format('truetype');
  }

  @font-face {
    font-family: Oswald;
    font-weight: 400;
    font-style: normal;
    font-display: swap;
    src:
      url(${OswaldRegular}) format('truetype');
  }

  @font-face {
    font-family: Oswald;
    font-weight: 600;
    font-style: normal;
    font-display: auto;
    src:
      url(${OswaldBold}) format('truetype');
  }
  
  @font-face {
    font-family: OswaldBold;
    font-weight: 700;
    font-style: normal;
    font-display: swap;
    src:
      url(${OswaldBold}) format('truetype');
  }
  
  `
