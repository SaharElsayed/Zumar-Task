import { createGlobalStyle } from "styled-components";
// semi-bold
import SemiBoldeot from "./assets/fonts/Poppins-SemiBold.eot";
import SemiBoldwoff2 from "./assets/fonts/Poppins-SemiBold.woff2";
import SemiBoldwoff from "./assets/fonts/Poppins-SemiBold.woff";
import SemiBoldttf from "./assets/fonts/Poppins-SemiBold.ttf";
import SemiBoldsvg from "./assets/fonts/Poppins-SemiBold.svg#Poppins-SemiBold";
// regular
import Regulareot from "./assets/fonts/Poppins-Regular.eot";
import Regularwoff2 from "./assets/fonts/Poppins-Regular.woff2";
import Regularwoff from "./assets/fonts/Poppins-Regular.woff";
import Regularttf from "./assets/fonts/Poppins-Regular.ttf";
import Regularsvg from "./assets/fonts/Poppins-Regular.svg#Poppins-Regular";
// light
import Lighteot from "./assets/fonts/Poppins-Light.eot";
import Lightwoff2 from "./assets/fonts/Poppins-Light.woff2";
import Lightwoff from "./assets/fonts/Poppins-Light.woff";
import Lightttf from "./assets/fonts/Poppins-Light.ttf";
import Lightsvg from "./assets/fonts/Poppins-Light.svg#Poppins-Light";

const FontStyles = createGlobalStyle`
@font-face {
  font-family: 'Poppins-SemiBold';
  src: url(${SemiBoldeot});
  src: url(${SemiBoldwoff2}) format('woff2'),
        url(${SemiBoldwoff}) format('woff'),
        url(${SemiBoldttf}) format('truetype'),
        url(${SemiBoldsvg}) format('svg');
  font-weight: 600;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: 'Poppins-Regular';
	src: url(${Regulareot});
  src: url(${Regularwoff2}) format('woff2'),
        url(${Regularwoff}) format('woff'),
        url(${Regularttf}) format('truetype'),
        url(${Regularsvg}) format('svg');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: 'Poppins-Light';
	src: url(${Lighteot});
  src: url(${Lightwoff2}) format('woff2'),
        url(${Lightwoff}) format('woff'),
        url(${Lightttf}) format('truetype'),
        url(${Lightsvg}) format('svg');
  font-weight: 300;
  font-style: normal;
  font-display: swap;
}

* {
  font-family: 'Poppins-Regular', sans-serif;
  margin: 0;
}
`;

export default FontStyles;
