import { createGlobalStyle } from 'styled-components'
import { normalize } from '@/styles/normalize'

// Oswald
import OswaldExtraLight from '../../public/fonts/Oswald-ExtraLight.woff'
import OswaldLight from '../../public/fonts/Oswald-Light.woff'
import OswaldMedium from '../../public/fonts/Oswald-Medium.woff'
import OswaldRegular from '../../public/fonts/Oswald-Regular.woff'
import OswaldBold from '../../public/fonts/Oswald-Bold.woff'
import OswaldHeavy from '../../public/fonts/Oswald-Heavy.woff'
import OswaldStencil from '../../public/fonts/Oswald-Stencil.woff'

// Raleway
import RalewayExtraLight from '../../public/fonts/Raleway-ExtraLight.woff'
import RalewayLight from '../../public/fonts/Raleway-Light.woff'
import RalewayRegular from '../../public/fonts/Raleway-Regular.woff'
import RalewaySemiBold from '../../public/fonts/Raleway-SemiBold.woff'
import RalewayBold from '../../public/fonts/Raleway-Bold.woff'
import RalewayBlack from '../../public/fonts/Raleway-Black.woff'

export const GlobalStyle = createGlobalStyle`
  ${normalize}
    
    @font-face {
    font-family: OswaldLight;
    font-style: normal;
    font-weight: 300;
    src: url(${OswaldLight}) format('woff');
    }

    @font-face {
    font-family: OswaldRegular;
    font-style: normal;
    font-weight: 600;
    src: url(${OswaldRegular}) format('woff');
    }

    @font-face {
    font-family: OswaldBold;
    font-style: normal;
    font-weight: 700;
    src: url(${OswaldBold}) format('woff');
    }

    @font-face {
    font-family: OswaldHeavy;
    font-style: normal;
    font-weight: 800;
    src: url(${OswaldHeavy}) format('woff');
    }

    @font-face {
    font-family: OswaldStencilBold;
    font-style: normal;
    font-weight: 600;
    src: url(${OswaldStencil}) format('woff');
    }
   
   // Raleway
   @font-face {
    font-family: Raleway;
    font-style: normal;
    font-weight: 400;
    src:  url(${RalewayRegular}) format('woff');
    }

    @font-face {
    font-family: RalewayLight;
    font-style: normal;
    font-weight: 300;
    src: url(${RalewayLight}) format('woff');
    }

    @font-face {
    font-family: RalewaySemiBold;
    font-style: normal;
    font-weight: 500;
    src: url(${RalewaySemiBold}) format('woff');
    }
 
    @font-face {
    font-family: RalewayBold;
    font-style: normal;
    font-weight: 600;
    src: url(${RalewayBold}) format('woff');
    }
 
    @font-face {
    font-family: RalewayBlack;
    font-style: normal;
    font-weight: 800;
    src: url(${RalewayBlack}) format('woff');
    }

`
