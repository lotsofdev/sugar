/**
 * @name                    pxToEm
 * @namespace            js.convert
 * @type                    Function
 * @platform          js
 * @platform          node
 * @status        beta
 *
 * Convert rem value to a px one
 *
 * @param         {Number}          em           The rem value to convert
 * @param         {HTMLElement}     [$elm=document.documentElement]         The HTMLElement to take as source for calculating the em
 * @return        {Number}                        The pixel value
 *
 * @todo      tests
 *
 * @snippet         __pxToEm($1)
 *
 * @example         js
 * import { __pxToEm } from '@lotsof/sugar/convert.js';
 * __pxToEm(36);
 *
 * @since     2.0.0
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://coffeekraken.io)
 */
export default function __pxToEm(px, $elm = document.documentElement) {
    return px / parseFloat(getComputedStyle($elm).fontSize || '16px');
}
//# sourceMappingURL=pxToEm.js.map