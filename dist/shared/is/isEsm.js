import __isCjs from './isCjs.js';
/**
 * @name                isEsm
 * @namespace           shared.is
 * @type                Function
 * @platform            js
 * @platform            node
 * @status              stable
 *
 * Check if the current module system the code runs on "esm" module system.
 *
 * @return      {Boolean}           true if the current system is esm
 *
 * @snippet         __isEsm()
 *
 * @todo            tests
 *
 * @example       js
 * import { __isEsm } from '@coffeekraken/sugar/is.js';
 * __isEsm(); // => true
 *
 * @since     2.0.0
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://coffeekraken.io)
 */
export default function __isEsm() {
    return !__isCjs();
}
//# sourceMappingURL=isEsm.js.map