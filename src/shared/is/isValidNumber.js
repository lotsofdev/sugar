/**
 * @name                isValidNumber
 * @namespace           shared.is
 * @type                Function
 * @platform            js
 * @platform            node
 * @status              stable
 *
 * Check if the passed value is a valid number.
 * A valid number is either an integer or a number (float).
 *
 * @param       {any}           value       The value to check
 * @return   {Boolean}   true if it's in a valid number, false if not
 *
 * @todo      tests
 *
 * @snippet         __isValidNumber()
 *
 * @example    js
 * import { __isValidNumber } from '@lotsof/sugar/is'
 * __isValidNumber(12) // true
 * __isValidNumber('he') // false
 * __isValidNumber(undefined) // false
 * __isValidNumber(NaN) // false
 *
 * @since       2.0.0
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://lotsof.dev)
 */
export default function __isValidNumber(value) {
    if (Number.isInteger(value)) {
        return true;
    }
    if (!Number.isNaN(parseFloat(value))) {
        return true;
    }
    return false;
}
//# sourceMappingURL=isValidNumber.js.map