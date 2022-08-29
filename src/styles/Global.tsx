import { Global } from '@emotion/react';
import fontFace from './fontFace';
import reset from './reset';

export default function GlobalStyles() {
  return <Global styles={[reset, fontFace]} />;
}
