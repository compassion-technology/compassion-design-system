// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// DO NOT MODIFY THIS FILE; IT WAS GENERATED BY buildIndexJs.mjs.
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import raw from 'raw.macro';

const replaceFill = (rawSvg) => {
  return rawSvg.replace('fill="none"', 'fill="currentColor"').replace(/fill="[^"]+"/g, '');
};

export const LogoFull = replaceFill(raw('./svg/LogoFull.svg'))
export const LogoMinimal = replaceFill(raw('./svg/LogoMinimal.svg'))