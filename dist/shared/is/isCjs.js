/**
 * @name                isCjs
 * @namespace           shared.is
 * @type                Function
 * @platform            js
 * @platform            node
 * @status              stable
 *
 * Check if the current module system the code runs on "commonjs" module system.
 *
 * @return      {Boolean}           true if the current system is esm
 *
 * @snippet         __isCjs()
 *
 * @example       js
 * import { __isCjs } from '@coffeekraken/sugar/is.js';
 * __isCjs(); // => true
 *
 * @since     2.0.0
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://coffeekraken.io)
 */
export default function __isCjs() {
    try {
        return typeof module !== 'undefined';
    }
    catch (e) {
        return false;
    }
}
//# sourceMappingURL=isCjs.js.map