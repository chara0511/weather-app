import { css } from 'styled-components';

import RalewayRegularTTF from '../font/raleway/raleway-v17-latin-regular.ttf';
import RalewayRegularWOFF from '../font/raleway/raleway-v17-latin-regular.woff';
import RalewayRegularWOFF2 from '../font/raleway/raleway-v17-latin-regular.woff2';
import Raleway500TTF from '../font/raleway/raleway-v17-latin-500.ttf';
import Raleway500WOFF from '../font/raleway/raleway-v17-latin-500.woff';
import Raleway500WOFF2 from '../font/raleway/raleway-v17-latin-500.woff2';
import Raleway600TTF from '../font/raleway/raleway-v17-latin-600.ttf';
import Raleway600WOFF from '../font/raleway/raleway-v17-latin-600.woff';
import Raleway600WOFF2 from '../font/raleway/raleway-v17-latin-600.woff2';

const FontFaces = css`
  @font-face {
    font-family: 'Raleway';
    src: url(${RalewayRegularWOFF2}) format('woff2'), url(${RalewayRegularWOFF}) format('woff'),
      url(${RalewayRegularTTF}) format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Raleway';
    src: url(${Raleway500WOFF2}) format('woff2'), url(${Raleway500WOFF}) format('woff'),
      url(${Raleway500TTF}) format('truetype');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Raleway';
    src: url(${Raleway600WOFF2}) format('woff2'), url(${Raleway600WOFF}) format('woff'),
      url(${Raleway600TTF}) format('truetype');
    font-weight: 600;
    font-style: normal;
  }
`;

export default FontFaces;
