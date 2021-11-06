import { createGlobalStyle } from 'styled-components'

import EurostileWoff from '../fonts/EurostileNextLTPro-Bold.woff'
import EurostileWoff2 from '../fonts/EurostileNextLTPro-Bold.woff2'

import SSPBoldWoff from '../fonts/SourceSansPro-Bold.woff'
import SSPBoldWoff2 from '../fonts/SourceSansPro-Bold.woff2'
import SSPRegularWoff from '../fonts/SourceSansPro-Regular.woff'
import SSPRegularWoff2 from '../fonts/SourceSansPro-Regular.woff2'
import SSPSemiboldWoff from '../fonts/SourceSansPro-Semibold.woff'
import SSPSemiboldWoff2 from '../fonts/SourceSansPro-Semibold.woff2'

// Featured
import OswaldBold from '../fonts/Oswald-Bold.ttf'
import OswaldRegular from '../fonts/Oswald-Regular.ttf'
import OswaldLight from '../fonts/Oswald-Light.ttf'

import { normalize } from './normalize'

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  /* Regular - 400 */
  @font-face {
    font-family: SourceSansPro;
    font-weight: 400;
    font-style: normal;
    
    src:
      url(${SSPRegularWoff2}) format('woff2'),
      url(${SSPRegularWoff}) format('woff');
  }

  /* Semibold - 600 */
  @font-face {
    font-family: SourceSansPro;
    font-weight: 600;
    font-style: normal;
    
    src:
      url(${SSPSemiboldWoff2}) format('woff2'),
      url(${SSPSemiboldWoff}) format('woff');
  }

  /* Bold - 700 */
  @font-face {
    font-family: SourceSansPro;
    font-weight: 700;
    font-style: normal;
    
    src:
      url(${SSPBoldWoff2}) format('woff2'),
      url(${SSPBoldWoff}) format('woff');
  }

  @font-face {
    font-family: FeaturedHeadline;
    font-weight: 400;
    font-style: normal;
    
    src:
      url(${EurostileWoff2}) format('woff2'),
      url(${EurostileWoff}) format('woff');
  }

  @font-face {
    font-family: Oswald;
    font-weight: 300;
    font-style: normal;
    
    src:
      url(${OswaldLight}) format('truetype');
  }

  @font-face {
    font-family: Oswald;
    font-weight: 400;
    font-style: normal;
    
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
    
    src:
      url(${OswaldBold}) format('truetype');
  }
  
  `
